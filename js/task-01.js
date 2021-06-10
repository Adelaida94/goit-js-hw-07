'use strict'


const elItem = document.querySelectorAll('.item');
const countList = document.querySelectorAll('.item ul');
const itemTitle = document.querySelectorAll('ul h2');
console.log('В списке', elItem.length, 'категории');

console.log('Категория:', itemTitle[0]);
console.log('Количество элементов:' , countList[0].children.length);
console.log('Категория:', itemTitle[1]);
console.log('Количество элементов:' , countList[1].children.length);
console.log('Категория:', itemTitle[2]);
console.log('Количество элементов:', countList[2].children.length);






