const path = require('path');

const a1 = path.basename('/foo/bar/baz/asdf/quux.html'); // method returns the last portion of a path
const a2 = path.dirname('/foo/bar/baz/asdf/quux.html'); // method returns the directory of file
console.log(a1)
console.log(a2)

const a3 = path.extname(__filename) //the file extension, here use uses current file by  __filename
console.log(__filename)
console.log(a3)