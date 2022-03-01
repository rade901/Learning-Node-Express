const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/post');


const router = express.Router();

// route to get a all tracks
router.get("/add-post", (req, res) => {
    res.render('add-post.ejs', {
        title: "Add Post",
        welcome: "Welcome to the add post page",
        content: "Content of the add post page",


    });
});
router.post("/add-post", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    try {
        await post.save();
        res.redirect('/all-posts');
    } catch (err) {
       res.render('add-post.ejs', {
           title: "Add Post",
           welcome: "Welcome to the add post page",
           content: "Content of the add post page",
           errorMessage: err

       });
    }
});


  
module.exports = router;