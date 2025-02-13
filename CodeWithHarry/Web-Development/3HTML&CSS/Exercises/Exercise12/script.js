// let color = Math.floor(Math.random() * 999999) + 1;

// let boxes = document.body.getElementsByClassName("box");
let boxes = document.querySelector(".container").children;
Array.from(boxes).forEach((box) => {
  let bcolor = Math.floor(Math.random() * 16777215).toString(16);
  let tcolor = Math.floor(Math.random() * 16777215).toString(16);
  box.style.backgroundColor = `#${bcolor}`;
  box.style.color = `#${tcolor}`;
  box.innerHTML = `#${tcolor}`;
});

// document.body.getElementsByClassName("box")[0].style.color = `#${Math.floor(Math.random() * 999999)}`

//
// Harry sir
// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })
