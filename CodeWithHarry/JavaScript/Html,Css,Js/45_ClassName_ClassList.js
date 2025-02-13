let first = document.getElementById("first")
console.log(first)

//It replaces whole string of classes
first.className = "text-black red"

//Adds a class
first.classList.add("red")

//removes a class
first.classList.remove("red")

//check for class,return true or fale.
first.classList.contains("red")
console.log(first.classList.contains("red"))

//adds  class if it dosen't esxit and rmoves if exists
first.classList.toggle("red")
console.log(first.classList.contains("red"))