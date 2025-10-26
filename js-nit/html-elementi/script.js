const nasElement = document.createElement('h1');
nasElement.textContent = 'Ovo je nas element';
nasElement.style.color = 'blue';

document.body.appendChild(nasElement);

const div1 = document.createElement('div');

const div2 = document.createElement('div');
const div3 = document.createElement('div');

div1.style.width = '300px';
div1.style.height = '300px';
div1.style.border = '1px solid black';
div1.style.backgroundColor = 'red'

div2.style.width = '200px';
div2.style.height = '200px';
div2.style.border = '1px solid black';
div2.style.backgroundColor = 'green'


div3.style.width = '100px';
div3.style.height = '100px';
div3.style.border = '1px solid black';
div3.style.backgroundColor = 'blue'


div1.appendChild(div2);
div1.appendChild(div3);

document.body.appendChild(div1);