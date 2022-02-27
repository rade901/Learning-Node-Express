const express = require('express')


const router = express.Router();

// route to get a all tracks
router.get("/login", (req, res) => {
    res.render("login.ejs", {
        title: "Admin Login",
        welcome: "Welcome to the admin login page",
        content: "Content of the admin login page"

    });
  });
  //Handling user login

  
module.exports = router;