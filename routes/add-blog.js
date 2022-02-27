const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../models/blog');


const router = express.Router();

// route to get a all tracks
router.get("/add-blog", (req, res) => {
    const blog = new Blog({
        title: 'Test Title',
        content: 'Test content'
    });
    blog.save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
  });
  
module.exports = router;