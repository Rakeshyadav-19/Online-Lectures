const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  console.log("This is get req");
  res.send("This is My blog");
});
router.get("/about", (req, res) => {
  console.log("This is get req");
  res.send("This is My about blog");
});
router.get("/:slug", (req, res) => {
  console.log(req.params);
  res.send(`This is ${req.params.slug} blog`);
});

module.exports = router
