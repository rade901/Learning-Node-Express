const express = require('express')


const router = express.Router();

// route to get a all tracks
router.get("/contact", (req, res) => {
    res.render("contact.ejs", {
        title: "Contact",
        welcome: "Welcome to the contact page",
        content: "Content of the contact page"

    });
  });
  
module.exports = router;