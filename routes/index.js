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
        res.send('');
    });
});


module.exports = router;
