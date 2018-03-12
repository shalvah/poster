# poster
This project demonstrates how to add Twitter's realtime likes functionality to your Node app with Pusher. [Here's a walkthrough](https://blog.pusher.com/build-twitters-realtime-likes-feature-node-js-pusher/).

## Description
The app's homepage displays a list of posts. Open the app in several different browser windows or tabs simultaneously. You'll see that liking a post in one window reflects across all windows wthout needing a page refresh.

## Prerequisites
- Node.js (v6.0.0 or higher) 
- MongoDB (v3.4.0 or higher)
- A [Pusher account](https://pusher.com/signup) and a [Pusher app credentials](http://dashboard.pusher.com/)

## Getting started
Clone the project:

```bash
git clone https://github.com/shalvah/poster
```

Put your Pusher app credentials in a `.env` file in the project root:
```
PUSHER_APP_ID=your-app-id
PUSHER_APP_KEY=your-app-key
PUSHER_APP_SECRET=your-app-secret
PUSHER_APP_CLUSTER=your-app-cluster
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

## Built With

* [Pusher](https://pusher.com/) - APIs for building realtime features

## Acknowledgements

- Twitter!
