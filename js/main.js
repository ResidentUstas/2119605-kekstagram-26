const pictureArray = [];
const occupPictureNumbers = [];
const occupCommentNumbers = [];
const descriptionsList = ['Отдыхаем с друзьями!)', 'Это я и моя тень','хочу поделиться настроением','Проснулся-потянулся','Улетаю на отдых'];
const commentsList = [ 'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Это прекрасно!)','Ты просто супер','Узнаю это место, бывали там с друзьями','Классно выглядишь;)','Как всегда бомбический ракурс!'];
const nameList = ['Виктор','Алина','Полина','Иван','Алексей','Никита','Юля','Сергей','Антон','Вика','Катя'];

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

function getPictureNumber(){
  while (true){
    const picNumber=getRandomPositiveInteger(1,1001);
    if (!occupPictureNumbers.includes(picNumber)){
      occupPictureNumbers.push(picNumber);
      return picNumber;
    }
  }
}

function getCommentNumber(){
  while (true){
    const commentNumber=getRandomPositiveInteger(1,1001);
    if (!occupCommentNumbers.includes(commentNumber)){
      occupCommentNumbers.push(commentNumber);
      return commentNumber;
    }
  }
}

function getComment(){
  const commentObj = {
    id: getCommentNumber(),
    avatar: `img/avatar-${ getRandomPositiveInteger(1,7) }.svg`,
    message:  commentsList[getRandomPositiveInteger(0, commentsList.length)],
    name: nameList[getRandomPositiveInteger(0, nameList.length)]
  };

  return commentObj;
}

function generateObjects(){
  for (let i=0; i<25;i++){
    const picture =
   {
     id : getRandomPositiveInteger(1,26),
     url : `photos/${  getPictureNumber()  }.jpg`,
     description: descriptionsList[getRandomPositiveInteger(0,descriptionsList.length)],
     likes: getRandomPositiveInteger(15,201),
     comments: getComment()
   };

    pictureArray.push(picture);
  }
}
