const express = require('express');
const dotenv = require('dotenv');
const indexRouter = require('./routes');
const { sequelize } = require('./models');

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());

sequelize
    .sync({ force : false })
    .then(() => console.log('데이터베이스 연결 성공'))
    .catch((error) => console.error(error));

app.use('/', indexRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500)
        .json(
            response.responseFromData(
            responseText.response_text.fail,
            responseText.response_text.denied,
            err
            )
        );
});

app.listen(app.get('port'), () => {
console.log(app.get('port'), '번 포트에서 대기 중');
});
