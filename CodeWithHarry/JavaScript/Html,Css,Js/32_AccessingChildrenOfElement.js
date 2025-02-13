//The first element after body,if tag is on new line the space count as text area
console.log(document.body.firstChild)
console.log(document.body.lastChild)
//Returns all child
console.log(document.body.childNodes)
//TO covert the cildnodes(it is node list) to array
let arr = Array.from(document.body.childNodes)
console.log(arr)
