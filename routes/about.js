const express = require('express')


const router = express.Router();

// route to get a all tracks
router.get("/about", (req, res) => {
    res.render("about.ejs", {
        title: "About",
        welcome: "Welcome to the about page",
        content: "Content of the about page"

    });
  });
  
module.exports = router;