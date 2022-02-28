const express = require('express');
const router = express.Router();
const Post = require('../models/post');




// route to get a all tracks
router.get("/all-posts", (req, res) => {
    Post.find()
        .then(Post => {
            res.render('all-posts.ejs', { Post });
        })
        .catch(err => {
            console.log(err);
        });
});









  
module.exports = router;