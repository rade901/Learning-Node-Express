// imports
const bodyParser = require('body-parser');
const express = require('express');
const home = require('./routes/home');
const about = require('./routes/about');
const info = require('./routes/info');
const contact = require('./routes/contact');
const login = require('./routes/login');
const adminPage = require('./routes/adminPage');
const addPost = require('./routes/add-post');
const allPosts = require('./routes/all-posts');
const PostAdd = require('./routes/add-post');
const methodOverride = require('method-override');
const dotenv = require('dotenv').config(); 
const {check, validationResult} = require('express-validator');
const mongoose = require('mongoose');






const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
/// CSS
app.use(express.static(__dirname + '/public'));
// connect to mongodb
const db = mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error(err));



//rendering ejs files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//routes
app.use('/', home);
app.use('/', about);
app.use('/', info);
app.use('/', contact);
app.use('/', login);
app.use('/', adminPage);
app.use('/', addPost);
app.use('/', allPosts);
app.use('/', PostAdd);
app.get('*', function(req, res){
    res.status(404).render('404.ejs', {
        title: "404 Page not found",
    });
  });
//listening
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server started on localhost port http://localhost:3000/');
});