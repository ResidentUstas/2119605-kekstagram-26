import {generateObjects} from './util.js';
const bodyTag = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');

// import {descriptionsList, commentsList, nameList} from './data.js';
const pictureTemplate = document.querySelector('#picture').content;
const commentTemplate = document.querySelector('#comment').content;

const pictureList = generateObjects();
const page = document.querySelector('.pictures');

// const addCommentsToPicture = function (commentList) {
//   c;
// };

pictureList.forEach((picture) => {
  const pic = pictureTemplate.cloneNode(true);
  pic.querySelector('img').src = picture.url;
  picture.comments.forEach((comment) => {
    const comm = commentTemplate.cloneNode(true);
    comm.querySelector('img').src = comment.avatar;
    comm.querySelector('.social__text').textContent = comment.message;
    pic.querySelector('.picture__comments').appendChild(comm);
  });
  pic.querySelector('.picture__likes').textContent = picture.likes;
  page.appendChild(pic);
});

const mouseOnPictureHandler = function(picture) {
  picture.addEventListener('click', ()=> {
    bodyTag.classList.add('modal-open');
    bigPicture.classList.remove('hidden');
    const image = bigPicture.querySelector('.big-picture__img');
    image.querySelector('img').src = picture.querySelector('.picture__img').src;
    bigPicture.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.social__comments').innerHTML = "";
    const comments = picture.querySelectorAll('.social__comment');
    comments.forEach((comment) => {
      bigPicture.querySelector('.social__comments').appendChild(comment);
    });
  });
};
const pictures = document.querySelectorAll('.picture');

for (let i=0;i<pictures.length;i++){
  mouseOnPictureHandler(pictures[i]);
}

document.addEventListener('keydown', (evt)=> {
  if (evt.keyCode === 27){
    bigPicture.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
  }
});

bigPicture.addEventListener('click', ()=> {
  bigPicture.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
});
