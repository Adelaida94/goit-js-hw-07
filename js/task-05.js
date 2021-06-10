const refs = {
input: document.querySelector('input'),
output: document.querySelector('span'),
}

console.log(refs.output)

refs.input.addEventListener('input', onInputChange);

function onInputChange (event) {
console.log(event.currentTarget.value);
if (event.currentTarget.value === '') {
    refs.output.textContent = 'незнакомец';
}

else refs.output.textContent = event.currentTarget.value;
}