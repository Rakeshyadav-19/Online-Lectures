// Cookies are small strings of data stored directly into the browser
// cookies are set by web-server using set-cookie HTTP-header header,next time when req is sent to same domain , the browser sends the cookie using cookie HTTP-header, hence server knows who sent it.
console.log(document.cookie) //We use this to access cookies, 
// cookie is key value pair, seperated by a colon(;)
document.cookie = "name=Rax1122334400" //it only updates this cookie and not  overwrite  all previious cookies
document.cookie = "name2=Rax11223344002" //this is a set call
document.cookie = "name=Raj" //It updates the value of key name
let key = prompt("enter your key")
let value = prompt("enter your value")
// encodeURIComponent helps keep valid formatting
document.cookie = `${encodeURIComponent(key)}  =${encodeURIComponent(value)}` //This way special characters are encoded
console.log(document.cookie)
// cookie have several options which can be provided after key=value
// document.cookie = "name = rax; path=/a; expires=Thr, 1 August 2024 00:00:00 GMT" 
// path  option makes cookie visible at /a, /a/b etc, all path starting from /a will have this cookie, and even / will have this cookie


// NOTES: The key=vlaue pair after encoded should not exceed 4KB.
//          Total no. of cookies per domain is limited to 20+[Exact amount is broweser dependent] 