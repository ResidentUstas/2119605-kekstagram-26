const bodyTag = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');

const mouseOnPictureHandler = function(picture) {
  picture.addEventListener('click', ()=> {
    bodyTag.classList.add('modal-open');
    bigPicture.classList.remove('hidden');
    const image = bigPicture.querySelector('.big-picture__img');
    image.querySelector('img').src = picture.querySelector('.picture__img').src;
    bigPicture.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.social__comments').innerHTML = '';
    const comments = picture.querySelectorAll('.social__comment');
    comments.forEach((comment) => {
      const comm = comment.cloneNode(true);
      bigPicture.querySelector('.social__comments').appendChild(comm);
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
