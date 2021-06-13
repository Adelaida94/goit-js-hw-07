const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  


  const ingredientsList = document.querySelector("#ingredients");

  ingredients.forEach((ingredient) => {
    const addElement = document.createElement("li");
    addElement.textContent = ingredient;
   
    ingredientsList.append(addElement);
  });
  

    // const potatoEl = document.createElement('li');
  //  potatoEl.textContent = 'Картошка';

  // const mushroomsEl = document.createElement('li');
  // mushroomsEl.textContent = 'Грибы';

  // const garlicEl = document.createElement('li');
  // garlicEl.textContent = 'Чеснок';

  // const tomatoEl = document.createElement('li');
  // tomatoEl.textContent = 'Помидоры';

  // const greenEl = document.createElement('li');
  // greenEl.textContent = 'Зелень';

  // const spicesEl = document.createElement('li');
  // spicesEl.textContent = 'Приправы';

  // const ingredientsList = document.querySelector('ul');

  // ingredientsList.append(potatoEl, mushroomsEl, garlicEl, tomatoEl, greenEl, spicesEl);
  // console.log(ingredientsList);