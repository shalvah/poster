# poster
This project demonstrates how to add Twitter's realtime likes functionality to your Node app with Pusher. [Walkthrough](https://blog.pusher.com/build-twitters-realtime-likes-feature-node-js-pusher/).

## Description
The app's homepage displays a list of posts. If you open the app in several different browser windows or tabs simultaneously, you'll see that liking a post in one window reflects across all windows wthout needing a page refresh.

## Requirements
- Node.js and NPM 
- MongoDB
- A [Pusher account](https://pusher.com/signup) and a [Pusher app credentials](http://dashboard.pusher.com/)

## Running the app
Put your Pusher app credentials in a `.env` file in the project root:
```
PUSHER_APP_ID=WWWWWWWWW
PUSHER_APP_KEY=XXXXXXXXX
PUSHER_APP_SECRET=YYYYYYYY
PUSHER_APP_CLUSTER=ZZZZZZZZ
```

Look for these lines of JavaScript in `views/index.hbs`:
```javascript
var pusher = new Pusher('your-app-id', {
            cluster: 'your-app-cluster'
        });
```
Insert your Pusher app ID and cluster in the appropriate places.

Start your MongoDB server by running `mongod`.

Then:

```bash
node bin/seed.js
npm start
```
