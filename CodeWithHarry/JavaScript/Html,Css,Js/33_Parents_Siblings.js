//his methods also counts space...hence not complete command, we get nodes without eleent,

//Siblings can be next(right) and previous(left).
//the next sibling is in nextSbling property and previou siblinf is previousSibling ptoperty 
console.log(document.body.firstChild)
let a = document.body.firstChild


//T0 get parent node 
//Paren node is returnd
console.log(a.parentNode)
//Only if it is a Valid html element it is returend else null
console.log(a.parentElement)

console.log(a.firstChild.nextSibling)