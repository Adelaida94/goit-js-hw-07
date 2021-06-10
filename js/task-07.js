const inputEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

console.log(inputEl)
console.log(text)

inputEl.addEventListener('input', onInputChange);

function onInputChange () {
    text.style.fontSize = `${inputEl.value}px`;
    
}

