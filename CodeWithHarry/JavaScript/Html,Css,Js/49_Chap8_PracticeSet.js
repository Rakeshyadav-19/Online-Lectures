
// Q.3 Repeate question using even listners
let btn1 = document.getElementById("btn1")
let g = function(x){
    window.location = "https://www.google.com";
    window.focus();
}
btn1.addEventListener("click", g)

//Q.4 write a Js program to keep fetching contenst of a website evry 5 seconds

// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json()
//   return a;
// }

// setInterval(async function() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// }, 3000)


// Q.5 Create ahlowing bulb effect using classList toggle ethod in Js.
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("glow");
}, 300)

