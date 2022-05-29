const accordeon = (classTitle, classContent, hiddenClass, activeClass) => {
  const title = document.querySelectorAll(classTitle);
  const content = document.querySelectorAll(classContent);

  function accordeonClosed() {
    content.forEach((item) => {
      item.classList.add(hiddenClass);
      item.classList.remove(activeClass);
    });
  }

  function accordeonOpen(i = 0) {
    content[i].classList.remove(hiddenClass);
    content[i].classList.add(activeClass);
  }

  title.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      accordeonClosed();
      accordeonOpen(i);
    });
  });


  accordeonClosed();
  accordeonOpen();

};

//Подключение аккордеона
// Передать классы title, content, hiddenClass(без точки), activeClass(без точки)
// accordeon('.accordeon__item-title', '.accordeon__item-content', 'accordeon__item-content--hidden', 'accordeon__item-content--active');

export default accordeon;