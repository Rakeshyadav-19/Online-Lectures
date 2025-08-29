// var h1 = document.createElement('h1')
// h1.innerHTML = "Hello World"

// var root = document.querySelector("#root")
// root.appendChild(h1)

var h1 = React.createElement('h1',null,"Hello From RaxLord")
var parent = document.querySelector("#root")

var root = ReactDOM.createRoot(parent)
root.render(h1)