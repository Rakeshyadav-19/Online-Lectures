const express = require("express");
const blog = require('./routes/blog.js')

const app = express();
const port = 3000;

// For any request on /blkog use thses routes
app.use("/blog", blog)
// To create folder and share that folder to public
app.use(express.static("public"));

// Used in url to get data, browser by default uses get method
app.get("/", (req, res) => {
  console.log("This is get req");
  res.send("This is Get request");
});
// Used to share private data which cannot be shared through url, linke passwords.
// Instead of using html page evrytime for evry api req we use POSTMAN
app.post("/", (req, res) => {
  console.log("This is post req"); 
  res.send("This is POST request");
});
// Change html page method to put to use this
app.put("/", (req, res) => {
  console.log("This is put req");
  res.send("This is put request");
});

// CHaing way to write this, since app is one we can also chain them
// Chaining of request
app.get("/", (req, res) => {
    console.log("This is get req");
    res.send("This is Get request");
  }).post("/", (req, res) => {
    console.log("This is post req");
    res.send("This is POST request");
  }).put("/", (req, res) => {
    console.log("This is put req");
    res.send("This is put request");
  });



//   To serve HTML files
app.get("/index", (req, res) => {
    console.log("This is Index");
    // instead of res.send
    res.sendFile('template/index.html', {root: __dirname});
  })
app.listen(port, () => {
  console.log("Listening on port ", port);
  console.log(`http://127.0.0.1:${port}`);
});

// Instead of creating cluter by ading more route we created , we can created folder and import routes file from that foder