let router = require('express').Router();

let Post = require('./../models/post');

router.get('/', (req, res, next) => {
    Post.find().exec((err, posts) => {
        res.render('index', { posts: posts });
    });

});

module.exports = router;
