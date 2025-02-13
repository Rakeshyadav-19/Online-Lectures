use("CrubDb");

// To show DB we are using
console.log(db);

// To create collection
db.createCollection("Courses");

// CREATE
// To insert
// If i run this multiple time it will get inserted but with new id
// db.Courses.insertOne({
//   name: "Rax website",
//   price: 0,
//   Projects: 15,
//   Exercise: 25,
// });

// To insert multiple objects
// db.Courses.insertMany([
//   {
//     name: "Rax website",
//     price: 0,
//     Projects: 15,
//     Exercise: 25,
//   },
//   {
//     name: "Xeno app",
//     price: 5,
//     Projects: 10,
//     Exercise: 30,
//   },
//   {
//     name: "Zephyr blog",
//     price: 10,
//     Projects: 8,
//     Exercise: 20,
//   },
//   {
//     name: "Fusion platform",
//     price: 50,
//     Projects: 12,
//     Exercise: 40,
//   },
//   {
//     name: "Lumen website",
//     price: 20,
//     Projects: 5,
//     Exercise: 15,
//   },
//   {
//     name: "Alpha portal",
//     price: 0,
//     Projects: 18,
//     Exercise: 50,
//   },
//   {
//     name: "Nova app",
//     price: 15,
//     Projects: 20,
//     Exercise: 35,
//   },
//   {
//     name: "Echo web service",
//     price: 25,
//     Projects: 22,
//     Exercise: 45,
//   },
//   {
//     name: "Zenith website",
//     price: 35,
//     Projects: 16,
//     Exercise: 55,
//   },
//   {
//     name: "Pulse platform",
//     price: 45,
//     Projects: 10,
//     Exercise: 60,
//   },
//   {
//     name: "Vertex blog",
//     price: 30,
//     Projects: 8,
//     Exercise: 25,
//   },
// ]);

// READ
// To read/fetch data from DB
let a = db.Courses.find({ price: 0 });
// To get it in array
console.log(a.toArray());
// To print whole
console.log(a);
// To get count
console.log(a.count());

// To get first result
let b = db.Courses.findOne({ price: 0 });
console.log(b);

// UPDATE
// to update first object value that matches
db.Courses.updateOne({ price: 5 }, { $set: { price: 90 } });

// DELETE
db.Courses.deleteOne({ price: 90 });
