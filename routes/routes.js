const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  res.render("add-users", { title: "Add users" });
});

router.get("/", (req, res) => {
  res.render("index", { title: "Home page" });
});

module.exports = router;
