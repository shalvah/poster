let mongoose = require('mongoose');

let Post = mongoose.model('Post', {
    text: String,
    posted_at: Date,
    likes_count: Number,
    author: String
});

module.exports = Post;