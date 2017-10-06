let router = require('express').Router();

let Post = require('./../models/post');

router.get('/', (req, res, next) => {
    Post.find().exec((err, posts) => {
        res.render('index', { posts: posts });
    });
});

router.post('/posts/:id/act', (req, res, next) => {
    const action = req.body.action;
    const counter = action === 'Like' ? 1 : -1;
    Post.update({_id: req.params.id}, {$inc: {likes_count: counter}}, {}, (err, numberAffected) => {
        let Pusher = require('pusher');

        let pusher = new Pusher({
            appId: process.env.PUSHER_APP_ID,
            key: process.env.PUSHER_APP_KEY,
            secret: process.env.PUSHER_APP_SECRET,
            cluster: 'eu'
        });

        let payload = { action: action, postId: req.params.id };
        pusher.trigger('post-events', 'postAction', payload, req.body.socketId);
        res.send('');
    });
});


module.exports = router;
