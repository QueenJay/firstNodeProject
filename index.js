const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 5000;

//use body parser middleware
app.use(bodyParser.urlencoded({extended : false}));

function call_api(finishedAPI, ticker){
    request('https://cloud.iexapis.com/stable/stock/'+ ticker +'/quote?token=pk_398c6b6fbaaa4a6e927504c02ea109e3',{json:true},(err,res,body)=>{
        if(err){return console.log(err);}
       
        if(res.statusCode === 200){
            // return body
            finishedAPI(body);
        };
    });
};

//set handlebars middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine','handlebars');

// const testedd = 'Hello Blessing, You are doing well!';

//set handlebars index GET route
app.get('/',function(req, res){
    call_api(function(doneAPI){
        res.render('home',{
            stock:doneAPI
        
        });

    },"fb");
    
});

//set handlebars index POST route
app.post('/',function(req, res){
    call_api(function(doneAPI){
        // posted_stuff = req.body.stock_ticker;
        res.render('home',{
            stock:doneAPI,
            // posted_stuff:posted_stuff
        });

    }, req.body.stock_ticker);
    
});

//about page route
app.get('/about',function(req, res){
    res.render('about');
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,()=> console.log('Sever Listening on port' + PORT))