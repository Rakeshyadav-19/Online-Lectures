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
console.log(t.rows[0].rowIndex);
//collection of td and th
console.log(t.rows[0].cells);
//collection of td and th
console.log(t.rows[0].sectionRowIndex);
//collection of tr inside element
console.log(t.rows[0].rowIndex);
// typeof document and typeof window is object
