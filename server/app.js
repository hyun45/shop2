const express = require('express');
const dotenv = require('dotenv');
const indexRouter = require('./routes');
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const { sequelize } = require('./models');

const passport = require('passport');
const passportConfig = require('./passport');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');

dotenv.config();
passportConfig();

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());

sequelize
    .sync({ force : false })
    .then(() => console.log('데이터베이스 연결 성공'))
    .catch((error) => console.error(error))

app.use(
    morgan('dev'),
    express.json(),
    express.urlencoded({ extended : false }),
    cookieParser(process.env.SECRET),
    session({
        resave : false,
        saveUninitialized : false,
        secret : process.env.SECRET,
        cookie : {
            httpOnly : true,
            secure : false
        },
        name : 'session-cookie'
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);

app.use('/upload', express.static('upload'));

app.use((req, res, next, error) => {
    console.error(error);
    res.status(500)
        .json(
            response.responseFromData(
            responseText.response_text.fail,
            responseText.response_text.denied,
            error
            )
        );
});

app.listen(app.get('port'), () => {
console.log(app.get('port'), '번 포트에서 대기 중');
});
