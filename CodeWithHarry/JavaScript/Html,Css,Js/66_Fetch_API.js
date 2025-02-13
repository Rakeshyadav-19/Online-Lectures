// JS can be used to send and retrive data from network whenever  needed
// in early days xml format was used to get data....now a days json format is used but still use the term AJAX (Asynchronous JavaScript And Xml )
// Pages fetches data without loading   

// Fetch is used to get data from the internet 
// fetch(url,[option])    - If no option given it is a get request
let p = fetch("https://goweather.herokuapp.com/weather/Ny")

p.then((response) => {
    console.log(response.status) //If succesfull goves value between 200-299
    console.log(response.ok) //Bool
    console.log(response.headers) //The headers we get in response from website
    return response.json() //it is a promise which resolves into a json file.
}).then((value2) => {
    console.log(value2)
})


let p1 = fetch("https://goweather.herokuapp.com/weather/Ny")
// fetch api resolves into a promise...the whose value is final reult...thats why we use 2 then 
p1.then((response) => { //get a promise here
    return response.json()
}).then((response) => { //the final reult value 
    console.log(response)
})

// Getting a response is a 2-stage process
// 1. An object of responce containg status and ok property

// We also have request headers, which we give to website. We pass it woth request. as a authentication token, or as some information we pass
let res = fetch(url, { //This curly is option //option is object, whose key is header 
    headers: { //And value is object
        Authentication: "Secret"
    }
});