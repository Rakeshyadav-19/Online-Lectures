const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
  }
//call changeBgRed() in cnonsole

let b = document.body
//Gives the chld node tat is first can be, comment, space(text), element node
console.log("First child of b is: ", b.firstChild)
//Only gives element node
console.log("First Element child of b is: ", b.firstElementChild)
