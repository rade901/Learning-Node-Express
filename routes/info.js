const express = require('express')


const router = express.Router();

// route to get a all tracks
router.get("/info", (req, res) => {
    res.render("info.ejs", {
        title: "Info",
        welcome: "Welcome to the info page",
        content: "Content of the info page"

    });
  });
  
module.exports = router;