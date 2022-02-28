const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/post');


const router = express.Router();

// route to get a all tracks
router.get("/add-post", (req, res) => {
    const post = new Post({
        title: 'novi naslov',
        content: 'novi tekst'
    });
    post.save()
        .then(restApi => {
            res.send(restApi);
        })
        .catch(err => {
            console.log(err);
        });
  });
  
module.exports = router;