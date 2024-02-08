const express = require('express');
const dotenv = require("dotenv");
const indexRouter = require("./routes");

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.json());

app.use("/", indexRouter);

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

app.listen(app.get("port"), () => {
console.log(app.get("port"), "번 포트에서 대기 중");
});
