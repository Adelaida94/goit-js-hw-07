const inputField = document.querySelector("#validation-input");
const currentLength = Number(inputField.dataset.length);

console.log(inputField);
console.log(typeof currentLength);


const onInputBlur = () => {
    if (inputField.value.length === currentLength) {
        inputField.classList.add("valid");
        inputField.classList.remove("invalid");
      } else {
        inputField.classList.add("invalid");
        inputField.classList.remove("valid");
      }
};

inputField.addEventListener('blur', onInputBlur);


