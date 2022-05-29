const modalWindow = (btnOpen, btnClosed, modalWindowClass, closeOutWindow) => {
  const btnModalOpen = document.querySelectorAll(btnOpen);
  const btnModalClosed = document.querySelector(btnClosed);
  const modalWindow = document.querySelector(modalWindowClass);
  const scroll = calcScroll();

  // Расчет ширины прокрутки
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    return scrollWidth;
  }

  // Фунсция открытия окна
  function openModalWindow() {
    modalWindow.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
  }

  // Фунсция закрытия окна
  function closeModalWindow() {
    modalWindow.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.marginRight = ``;

  }

  //Открытие окна
  btnModalOpen.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }
      openModalWindow();
    });
  });

  //Закрытие окна по кнопке
  btnModalClosed.addEventListener('click', () => {
    closeModalWindow();
  });
  //Закрытие окна по клику вне окна
  if (closeOutWindow) {
    modalWindow.addEventListener('click', (e) => {
      if (e.target === modalWindow) {
        closeModalWindow();
      }
    });
  };

};

//Подключение модального окна
// Передать классы: кнопка открытия окна, кнопка закрытия окна, класс окна, нужно ли закрывать модальное окно во клику на подложку.
// modalWindow('.modal__btn-open', '.modal-window__btn-closed', '.modal', true);

export default modalWindow;