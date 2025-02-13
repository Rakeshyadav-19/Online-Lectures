//Q.1 Create a nav bar and chaneg the color of its first element to red.
document.getElementsByTagName("nav")[0].firstElementChild.nextElementSibling.style.color = "red"
// document.getElementsByClassName("nav-li")[0].style.color = "green"

//Q.2Create a table without tbody. Nw use "view page source" button toc heck i it has tbody or not.
//ANS.:
//It doesn't have tbody, but when ypu check elemnts tab inspect, the browser has created it


// Q.3 crate an element with 3 children. Now change the coloer of first and last leement to green.
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

//Q.4 Write a JS code to chane background of all li tas to cyan
Array.from(document.getElementsByTagName("li")).forEach((x) =>{
    x.style.background = "cyan"
})