import {generateObjects} from './util.js';
console.log('module up!');
// import {descriptionsList, commentsList, nameList} from './data.js';
const pictureTemplate = document.querySelector('#picture').content;
const pictureList = generateObjects();
const page = document.querySelector('.pictures');

pictureList.forEach((picture) => {
  const pic = pictureTemplate.cloneNode(true);
  pic.querySelector('img').src = picture.url;
  pic.querySelector('.picture__comments').textContent = picture.comments.message;
  pic.querySelector('.picture__likes').textContent = picture.likes;
  page.appendChild(pic);
});

const mouseOnPictureHandler = function(picture) {
  picture.addEventListener('click', ()=> {
    const pic = document.querySelector('.big-picture');
    pic.classList.remove('hidden');
    var image = pic.querySelector('.big-picture__img');
    image.querySelector('img').src = picture.querySelector('.picture__img').src;
  });
};
let pictures = document.querySelectorAll('.picture');

for (let i=0;i<pictures.length;i++){
  mouseOnPictureHandler(pictures[i]);
}
