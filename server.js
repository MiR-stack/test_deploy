const { json } = require("express");
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(morgan("dev"), json());

app.get("/", (req, res) => {
  res.render("pages/home");
});
app.get("/service", (req, res) => {
  res.render("pages/service");
});
app.get("/about", (req, res) => {
  res.render("pages/about");
});
app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

app.listen(port, () => {
  console.log(`your app is running successfully on http://localhost:${port}`);
});
