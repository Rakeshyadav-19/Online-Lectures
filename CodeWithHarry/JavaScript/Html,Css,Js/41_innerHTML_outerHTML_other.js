let x = document.getElementsByTagName('span')[0]
//prints the whole line
console.log(x)

let y = document.getElementsByTagName('span')[0]
//Prints it as object
console.dir(y)


console.log(document.body.firstChild.nodeName) 
console.log(document.body.firstElementChild.nodeName)

//gets html inside the element as string.
//first is element id
console.log(first.innerHTML )
first.innerHTML = "<div><i>hey I am italic</i></div>" 
console.log(first.innerHTML )

//Constains fuull HTML (innerHTML + element itself)
console.log(second.outerHTML)
second.outerHTML = "<div><b>hey I am bold<b></div>"

//inner and outer can be used on elements only, to use on other(text, comments)
// we can use nodeValue or data
//prints the text value in this example
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)

//provides access to text inside the element: only text, -(minus) all tags)
console.log(document.body.textContent)
first.hidden = false