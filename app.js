// imports
const bodyParser = require('body-parser');
const express = require('express')
const home = require('./routes/home');
const about = require('./routes/about');
const info = require('./routes/info');
const contact = require('./routes/contact');
const admin = require('./routes/admin');

const app = express();
app.use(bodyParser.json());
/// CSS
app.use(express.static(__dirname + '/public'));


//rendering ejs files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//routes
app.use('/', home);
app.use('/', about);
app.use('/', info);
app.use('/', contact);
app.use('/', admin);
app.get('*', function(req, res){
    res.status(404).render('404.ejs', {
        title: "404 Page not found",
    });
  });



//port
app.listen(3000, () => {
    console.log('Server started on localhost port http://localhost:3000/');
});