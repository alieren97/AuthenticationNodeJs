const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const {requireAuth} = require('./middleware/authMiddleware')
const authRoutes = require('./routes/authRoute')

const app = express();

app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser());

app.set('view engine','ejs')

mongoose.connect('mongodb://127.0.0.1:27017/authTutorial', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}) .then((result) => app.listen(3000))
.catch((err) => console.log(err));

app.get('/', requireAuth,(req, res) => res.render('home'));
app.get('/smoothies', requireAuth,(req, res) => res.render('smoothies'));

app.use(authRoutes)