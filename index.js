const express = require ('express');
const path = require ('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const req = require('express/lib/request');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next)=>{
    res.send('<h1><a href="/login"> login</a></h1>')
});

app.get('/login', (req, res, next)=>{
    res.render('index', {
        title : 'login',
        msg :``, 

    });
});

app.post('/login', (req, res, next)=>{
    const userId = req.body.user_id; 
    const userPassword = req.body.user_password; 

    if(userPassword === 'xxx4'){
        res.cookie('cookieUserId', userId);
        res.redirect('/welcome?id:'+userId);
        console.log(res.locals.id);
        
    }else{
        res.redirect('/login?id:fail');
    }
});

app.get('/welcome', function(req, res, next){
    const userId = req.cookies.cookieUserId
    res.render('welcome', {user: userId });
});
app.get('/logout', (req, res, next)=>{
    res.clearCookie('cookieUserId');
    res.redirect('/')

});


app.listen(3000);
console.log('http://localhost:3000');