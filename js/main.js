function getRandomInt(min, max) {
    if (min >= max){
        return 'Ошибка. минимум больше максимума!';
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  function truncate(str, maxlegth) {
    if (str.length >= maxlegth) {
        return alert(false);
    }else{
        return alert(true);
    }
}