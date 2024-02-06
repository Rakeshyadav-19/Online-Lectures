//Q Create a Digital Seconds clock using setInterval method in JS, make UI.
//Use date object to get date

setInterval(function(){
    let a = new Date()
    let h = a.getHours()
    document.getElementById("Hr").innerHTML =  `${h}:`
    let m = a.getMinutes()
    document.getElementById("Min").innerHTML = `${m}:`
    let s = a.getSeconds()
    document.getElementById("Sec").innerHTML = `${s}`
    
    let wek = a.toLocaleDateString("india", { weekday: 'short' })
    document.getElementById("week").innerHTML = `<pre>${wek} `
    let mon = a.toLocaleString("default", { month: "short" })
    document.getElementById("month").innerHTML = `<pre>${mon} `
    let day = a.getDate()
    document.getElementById("day").innerHTML = `<pre>${day}`
    //console.log(a,h,m,s,d)
},1000)

// let h = 1
// let m = 1
// let s = 0
// setInterval(function(){
//     document.getElementById("Hr").innerHTML = h //`${h}`
//     h++
// }, 360000)
// setInterval(function(){
//     document.getElementById("Min").innerHTML = m //`${m}`
//     m++
// }, 60000)
// setInterval(function(){
//     document.getElementById("Sec").innerHTML = s //`${s}`
//     s++
// }, 1000)


