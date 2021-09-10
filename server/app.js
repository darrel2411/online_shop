const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./router/index");
const errorHandler = require("./helper/errorHandler");
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(router);

app.use(errorHandler); /// use error handler

app.listen(port, () => {
    console.log(`listening to port:${port}`);
});
