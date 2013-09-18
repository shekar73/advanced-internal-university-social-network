meteor bundle bubble_bundle.tgz --release 0.6.1
rm ~/bubble_bundle/bubble_bundle.tgz
rm -rf ~/bubble_bundle/bundle
mv bubble_bundle.tgz ~/bubble_bundle/
tar -xvzf ~/bubble_bundle/bubble_bundle.tgz -C ~/bubble_bundle/
npm install fibers@1.0.0 --prefix ~/bubble_bundle/bundle/server/node_modules/
MONGO_URL="mongodb://localhost:27017/bubble_development" ROOT_URL="https://www.emorybubble.com/" PORT=3000 node ~/bubble_bundle/bundle/main.js