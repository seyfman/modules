const cooltext = (inputClassText) => {
  const classText = document.querySelector(inputClassText);
  const text = classText.outerText;
  const textLenght = text.length;
  let index = 0;
  let textInterval;
  let startFunction = true;

  classText.textContent = '';

  // вывод текста побуквенно
  function setText() {
    classText.textContent = "<" + text.substr(0, index) + "|/>";
    index++;
    // console.log(index);
    // остановка если буквы закончились
    if (index >= textLenght) {
      clearInterval(textInterval);
    }
  }

  // старт вывода текста побуквенно с интервалом и проверкой
  function start() {
    if (startFunction) {
      textInterval = setInterval(setText, 20);
      startFunction = false;
    }
  }

  // Запуск функции усли в поле видимости при загрузке
  if ((window.pageYOffset + document.documentElement.clientHeight) > classText.offsetTop) {
    start();
  }

  // Запуск функции при скроле
  document.addEventListener('scroll', () => {
    if (((window.pageYOffset + document.documentElement.clientHeight) > classText.offsetTop) && startFunction) {
      start();
    }
    // console.log(classText.offsetTop);
    // console.log(window.pageYOffset + document.documentElement.clientHeight);
  });


};


// Передать класс текста
cooltext('.cooltext');

export default cooltext;