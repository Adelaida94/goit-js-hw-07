const counterValue = document.querySelector('span');
const targetBtn = document.querySelectorAll('button');
const incrementBtn = targetBtn[1];
const decrementBtn = targetBtn[0];

let count = 0;

decrementBtn.addEventListener ('click',HandleDecrementButtonClick); 
function HandleDecrementButtonClick() {
    count--;
    counterValue.innerHTML= count;
}

incrementBtn.addEventListener ('click',HandleIncrementButtonClick); 

function HandleIncrementButtonClick() {
    count++;
    counterValue.innerHTML= count;
}



