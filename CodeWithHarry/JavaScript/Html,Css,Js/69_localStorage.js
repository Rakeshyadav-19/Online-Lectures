let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

// localstorage is a web storage object which are not sent to server with each request, cookie is sent with each request.
// This data servives a full page referesh nd even a browser restart.
localStorage.setItem(key, value) //Store ket/value pair
// to update value we use setitem again for that key 

console.log(`The value at ${key} is ${localStorage.getItem(key)}`) //get the value by key

if (key == "red" || key == "blue") {
    localStorage.removeItem(key) //removes the key with its value
}

if (key == 0) {
    localStorage.clear() //delete everything
}

// Methods provided by localstorage:
localStorage.key(index) //get the key on given index
localStorage.length //number of stored items

// We can get and set value like an object
localStorage.name = 1
alert(localStorage.name)
delete localStorage.name

// NOTE: Both key and value must be a string
// We can use 2 jason methods to store objects in local storage 
// JSON.stringify(object) //Converts object in json string
// JSON.parse(string) //converts string to object(Must be a valid JSON)