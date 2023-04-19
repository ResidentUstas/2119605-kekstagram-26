import {generateObjects} from './util.js';

const pictureTemplate = document.querySelector('#picture').content;
const commentTemplate = document.querySelector('#comment').content;

const pictureList = generateObjects();
const page = document.querySelector('.pictures');

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

