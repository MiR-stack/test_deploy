const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("pages/home");
});
router.get("/service", (req, res) => {
  res.render("pages/service");
});
router.get("/about", (req, res) => {
  res.render("pages/about");
});
router.get("/contact", (req, res) => {
  res.render("pages/contact");
});


module.exports = router;