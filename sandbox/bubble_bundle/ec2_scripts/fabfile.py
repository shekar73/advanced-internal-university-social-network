from fabric.api import *
from fabric.api import run, put
from fabric.colors import green as _green
from fabric.colors import yellow as _yellow

import boto
import boto.ec2

from config import *

import time




def create_bundle_image(blank_ami_id, new_ami_name, path_to_bundle):
	"""
	Creates an EC2 instance, installs the Emory Bubble Bundle on it. And takes a snapshot to create an AMI
	"""

	print (_green("Started..."))

	ec2 = boto.connect_ec2()
	reservation = ec2.run_instances(image_id=blank_ami_id, key_name='xavier-macbook-campusbubble', security_groups=['WEB'], instance_type='m1.large', placement='us-east-1b')
	print reservation
	time.sleep(10)
	instance = reservation.instances[0]
	instance.update()
	while instance.state == u'pending':
		print (_yellow("Instance state: %s" % instance.state))
		time.sleep(10)
		instance.update()

	print (_green("Instance state: %s" % instance.state))
	print (_green("Instance public DNS name: %s" % instance.public_dns_name))

	time.sleep(20)

	env.hosts = [instance.public_dns_name]
	env.user = 'ubuntu'
	put(path_to_bundle, '/home/ubuntu/emory_bubble/bubble-3/sandbox/bubble_bundle/')
	run('cd /home/ubuntu/emory_bubble/bubble-3/sandbox/bubble_bundle')
	run('./configure.sh')
	run('sudo ./setup_bubble.sh')
	run('sudo ./start_bubble.sh')
	
	new_ami_id = ec2.create_image(instance.id, new_ami_name)
	print (_yellow("New AMI created: %s" % new_ami_id))

	images = ec2.get_all_images(image_ids=[new_ami_id])
	new_image = images[0]
	while new_image.state != u'available':
		print (_yellow("New AMI is %s" % new_image.state))
		time.sleep(10)
		images = ec2.get_all_images(image_ids=[new_ami_id])
		new_image = images[0]

	print (_green("New AMI %s is available" % new_ami_id))

	ec2.terminate_instances(instance_ids=[instance.id])

