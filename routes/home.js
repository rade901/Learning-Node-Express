const express = require('express')


const router = express.Router();

// route to get a all tracks
router.get("/", (req, res) => {
    res.render("home.ejs", {
        title: "Home",
        welcome: "Welcome to the home page",
        content: "Content of the home page"

    });
  });
  
module.exports = router;