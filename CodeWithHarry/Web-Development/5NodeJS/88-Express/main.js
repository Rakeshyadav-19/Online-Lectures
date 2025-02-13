const express = require("express");

const app = express();
const port = 3000;

// To create folder and share that folder to public
// using middelWare
app.use(express.static("public"));

// Wehn we get request on this path run this handeler
app.get("/", (req, res) => {
  res.send("Hellllo okk");
});

app.get("/about", (req, res) => {
  res.send("Hellllo about me");
});
//Now instead of creating .get for every path we , take express help and give
// app.get("/dir/:varName1") can be more than 1 var
// :slug is parameter,this are variables in url
// app.get("/blog/:slug/:secparame", (req, res) => {
//   res.send(`Hellllo about me ${req.params.slug} or ${req.params.secparame}`);
// });

app.get("/blog/:slug/", (req, res) => {
  // logic to fetch /blog/:{slug} from db
  res.send(`Hellllo about me ${req.params.slug}`);
  //For this url http://127.0.0.1:3000/blog/into-to-bcakend?mode=light&reigon=pk
  console.log(req.params); // { slug: 'into-to-bcakend' } //Reurns variablue you have made
  console.log(req.query); // { mode: 'light', reigon: 'pk' } //Brings after ?
  // req.params are object that will return those url parameters.
});

app.listen(port, () => {
  console.log("Listening on port ", port);
  console.log(`http://127.0.0.1:${port}`);
});
// app.xyz(Path, Handeler - (function))
// app.get or app.post or app.put or app.delete
