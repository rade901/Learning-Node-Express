const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('../models/post');




// route to get a all 
router.get("/all-posts", (req, res) => {
const page = req.query.page;
const nextPage = parseInt(page) + 1;
const limit = 4;
const skip = (page * limit) - limit;
const results = {};
results.next = {
    page: page + 1,
    limit: limit
};
results.prev = {
    page: page - 1,
    limit: limit
};
// 1. Query the database for a list of all posts
Post.find().skip(skip).limit(limit).sort({ created: 'desc' })
.then(Post => {
    // 2. Find the post 
    // 3. Render the post
    res.render('all-posts.ejs', {
        title: 'All Posts',
        Post: Post,
        page: page,
        limit: limit,
        count: Post.length,
        results: results,
        nextPage: nextPage
    });
})
.catch(err => {
    console.log(err);
});
});
///delete post
router.delete('/all-posts/:id', async (req, res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/all-posts');
    })
    .catch(err => {
        console.log(err);
    });
});



  










  
module.exports = router;