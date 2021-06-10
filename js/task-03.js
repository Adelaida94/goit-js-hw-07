const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imagesList = document.querySelector('ul');
console.log(imagesList);

const firstImageList = document.createElement('li');
const secondImageList = document.createElement('li');
const thirdImageList = document.createElement('li');


imagesList.append(firstImageList, secondImageList, thirdImageList);


firstImageList.insertAdjacentHTML('beforeend', '<img src= "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt= "White and Black Long Fur Cat" width="500" height="335"></img>');
secondImageList.insertAdjacentHTML('beforeend', '<img src= "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Orange and White Koi Fish Near Yellow Koi Fish" width="500" height="335"></img>')
thirdImageList.insertAdjacentHTML('beforeend', '<img src= "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Group of Horses Running" width="500" height="335"></img>')



//  const firstImage = document.createElement('img');
//  firstImage.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
//  firstImage.alt =  'White and Black Long Fur Cat';

//  const secondImage = document.createElement('img');
//  secondImage.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
//  secondImage.alt =  'Orange and White Koi Fish Near Yellow Koi Fish';

//  const thirdImage = document.createElement('img');
//  thirdImage.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
//  thirdImage.alt =  'Group of Horses Running';

// console.log(firstImage);
// console.log(secondImage);
// console.log(thirdImage);