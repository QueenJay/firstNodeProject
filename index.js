const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;




//set handlebars middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine','handlebars');

const testedd = 'Hello Blessing, You are doing well!';
//set handlebars routes
app.get('/',function(req, res){
    res.render('home',{test:testedd});
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,()=> console.log('Sever Listening on port' + PORT))