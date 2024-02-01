let t = document.body.firstElementChild.firstElementChild;
console.log(t);
//colection of tr elements
console.log(t.rows);
//reference to caption
console.log(t.caption);
//reference to thead
console.log(t.tHead.firstElementChild);
//reference to tfoot
console.log(t.tFoot);
//reference to tbody
console.log(t.tBodies);
//collection of tr inside element
console.log(t.rows[0].tbody)
//Row number starting from 0
console.log(t.rows[0].rowIndex);
//collection of td and th
console.log(t.rows[0].cells);
//Index of tr inside enclosing element
console.log(t.rows[0].sectionRowIndex);

//No. of cells inside enclosing tag <tr>
//console.log(t.rows[0].cellIndex);

console.log(typeof document)
console.log(typeof window)