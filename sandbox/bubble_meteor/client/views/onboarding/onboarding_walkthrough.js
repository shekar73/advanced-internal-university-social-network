Template.onboardingWalkThrough.created = function() {
	console.log('Onboarding walkthrough template.');
}

Template.onboardingWalkThrough.rendered = function() {
	window.location.href = "/tour/index.html"
	Session.set('isLoading', false);
	console.log('Onboarding walkthrough template.');
}