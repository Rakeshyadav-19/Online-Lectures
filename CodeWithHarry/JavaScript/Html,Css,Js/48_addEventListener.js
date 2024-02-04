let x = function(event) {
    console.log(event)

    //Element that handels the event
    console.log(event.CurrentTarget)
    console.log(event.target)

    //Coordinates of the cursor
    console.log(event.type, event.clientX, event.clientY)
    alert("Hello World1!")
}
  
let y = function(e) {
    //
    //prints the pointer event(Event object)
    console.log(e)
    alert("Hello World2!")
}
  
//It is used to assign multipe handlres to an event.
btn.addEventListener('click', x)
btn.addEventListener('click', y)
  

let a = prompt("What is your favorite number?");
if (a == "2") {
    //handler must be the same function object for this to work.
    //create one reference of function.
    //here we stored it in x
    btn.removeEventListener('click', x)
}