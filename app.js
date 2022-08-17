
const { json } = require("express");
const express = require("express");
const morgan = require("morgan");
const pageRouter = require('./router/pageRouter')
const authRouter = require('./router/authRouter')

const app = express();

app.set("view engine", "ejs");
app.use(morgan("dev"), json(),express.urlencoded({extended:false}));

app.use(pageRouter)
app.use('/auth',authRouter)

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

module.exports = app