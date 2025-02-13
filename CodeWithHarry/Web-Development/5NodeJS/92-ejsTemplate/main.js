const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let usrname = "rax";
  let sn = 12;
  res.render("index", { name: usrname, sn }); //Is key:value name same write it once
});
app.listen(port, () => {
  console.log("Listening on port ", port);
  console.log(`http://127.0.0.1:${port}`);
});
