// This method is used to insert HTML. he first parameter is a code word specifying where to insert, must be one of the following:

let first = document.getElementById("first")
console.log(first)

//Insert HTML immediately befor element
first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');


//Insert HTML into element at the end
first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');

//Insert HTML into element at the beginning
first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');

//Insert HTML immediately after element
first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');

//removes that full node, remove that whole elemnt
first.remove()