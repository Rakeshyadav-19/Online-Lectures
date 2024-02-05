//Q Create a Digital Seconds clock using setInterval method in JS, make UI.
//Use date object to get date
let h = 1
let m = 1
let s = 0

setInterval(function(){
    document.getElementById("Hr").innerHTML = h //`${h}`
    h++
}, 360000)
setInterval(function(){
    document.getElementById("Min").innerHTML = m //`${m}`
    m++
}, 60000)
setInterval(function(){
    document.getElementById("Sec").innerHTML = s //`${s}`
    s++
}, 1000)

// let a = new Date()
// let h = a.getHours()
// let m = a.getMinutes()
// let s = a.getSeconds()
// let d = a.getDate()