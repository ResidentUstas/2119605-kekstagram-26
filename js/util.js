/* eslint-disable no-constant-condition */
import {descriptionsList, commentsList, nameList} from './data.js';
const pictureArray = [];
const occupPictureNumbers = [];

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// eslint-disable-next-line no-unused-vars
function checkStringLength(string, length) {
  return string.length <= length;
}

function getPictureNumber() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const picNumber = getRandomPositiveInteger(1, 25);
    if (!occupPictureNumbers.includes(picNumber)) {
      occupPictureNumbers.push(picNumber);
      return picNumber;
    }
  }
}

function getCommentNumber() {
  while (true) {
    const commentNumber = getRandomPositiveInteger(1, 10);

    return commentNumber;

  }
}

function getComment() {
  const numComments = getRandomPositiveInteger(1, 4);
  const comments =[];
  for (let i=0;i<numComments;i++){
    const commentObj = {
      id: getCommentNumber(),
      avatar: `./img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: commentsList[getRandomPositiveInteger(0, commentsList.length - 1)],
      name: nameList[getRandomPositiveInteger(0, nameList.length - 1)]
    };

    comments[i] = commentObj;
  }

  return comments;
}

function generateObjects() {
  for (let i = 0; i < 25; i++) {
    const picture =
        {
          id: getRandomPositiveInteger(1, 26),
          url: `./photos/${getPictureNumber()}.jpg`,
          description: descriptionsList[getRandomPositiveInteger(0, descriptionsList.length - 1)],
          likes: getRandomPositiveInteger(15, 201),
          comments: getComment()
        };

    pictureArray.push(picture);
  }
  return pictureArray;
}

export { generateObjects };

