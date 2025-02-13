//Event is a signal that something has happened

//If same event written in HTML and Js , the event in Js will be executed
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}

//some events are written in html element
