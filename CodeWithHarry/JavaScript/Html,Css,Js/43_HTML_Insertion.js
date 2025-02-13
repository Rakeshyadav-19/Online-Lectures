let a = document.getElementsByTagName('div')[0]

a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

//creates a div element
let div = document.createElement('div');
//Writes thid in div element created above
div.innerHTML = '<h1>Hello, World!!!!</h1>';
//Adds this to inside element here a(div)
a.appendChild(div);
//adds this element at end in that elemet 
a.append(div)
//adds this element at star in that elemet 
a.prepend(div);
//Insert befor this node,(befor this element)
a.before(div);
//Insert after this node,(befor this element)
a.after(div);
//replaces the node with this node
// a.replaceWith(div);