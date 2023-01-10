import { createList } from "./list-generator"

// Gerar lista
let expected = document.createElement(`<ul>
<li>Text 1<li>
<li>Text 2<li>
<li>Text 3<li>
<li>Text 4</li>`);

console.log(createList(3));
console.log(createList(expected));

// Fazer Lista

expected = `<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
<li>Item 5</li>`

console.log(createList(5, 'Item'));
console.log(expected);