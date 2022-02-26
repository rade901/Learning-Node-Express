const express = require('express')


const router = express.Router();

// route to get a all tracks
router.get("/admin", (req, res) => {
    res.render("admin.ejs", {
        title: "Admin Login",
        welcome: "Welcome to the admin login page",
        content: "Content of the admin login page"

    });
  });
  
module.exports = router;