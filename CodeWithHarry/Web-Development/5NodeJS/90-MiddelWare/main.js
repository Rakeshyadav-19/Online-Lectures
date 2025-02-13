const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));

// Middel Ware 1 every req passes through here

// For eg make a logger
app.use((req, res, next) => {
    console.log(req.headers)
    // and can append this logs in file to keep logs
    console.log(Date.now(), req.method)
    // can add custome valur to header and can acees it anywhere in file
    req.rax = "i am rax"
    next()
});

app.get("/", (req, res) => {
  res.send(`Hellllo okk, ${req.rax}`);
});

app.listen(port, () => {
  console.log("Listening on port ", port);
});
