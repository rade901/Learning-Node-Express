const express = require('express')


const router = express.Router();

// route to get a all tracks
router.get("/adminPage", (req, res) => {
    res.render("adminPage.ejs", {
        title: "Admin Page",
        welcome: "Welcome to the admin page",
        content: "Content of the admin page"

    });
  });
  
module.exports = router;