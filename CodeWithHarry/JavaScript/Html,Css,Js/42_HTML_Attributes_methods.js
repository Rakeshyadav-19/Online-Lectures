let first = document.getElementById("first");
console.log(first)
//Method used to get value of an attribute,return value of it
let a = first.getAttribute("class")
console.log(a)

//Method to check for existance of an atribute,return T or F
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

//Method used to set vlaue of an attibute
first.setAttribute("hidden", "true")
//will add this calss in this element
//Space means a new class
first.setAttribute("class", "true sachin")

//Method to remove attribute from item
first.removeAttribute("class")

//Method to get collection of all attributes
console.log(first.attributes)

//Gives all dataset in that element
console.log(first.dataset)
//Get that attribute value created by user
console.log(first.dataset.game)
console.log(first.dataset.player)