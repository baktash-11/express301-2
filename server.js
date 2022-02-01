const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const app = express();


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(helmet());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/home', (req, res, next)=>{
    res.render('index', {title: 'Home', msg: ''})
});

app.post('/login', (req, res, next)=>{
    const userId = req.body.user_id;
    const userPass = req.body.user_password;
    if(userPass === "xxxx" && userId=== "baktash@live.ca"){
        res.cookie('cookieUserId', userId);
        res.redirect('/welcome');
        
    }else{{
        res.redirect('/home?msg=fail')
    }}
});


app.get('/welcome', (req, res, next)=>{
    res.render('welcome', {user: req.cookies.cookieUserId});
});

app.get('/logout', (req, res, next)=>{
    res.clearCookie('cookieUserId');
    res.redirect('/home')
});


app.listen(3000, ()=>console.log('http://localhost:3000'));