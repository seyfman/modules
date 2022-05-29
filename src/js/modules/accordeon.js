const accordeon = (classTitle, classContent, hiddenClass, activeClass) => {
  const title = document.querySelectorAll(classTitle);
  const content = document.querySelectorAll(classContent);
  console.log(title);

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

}

export default accordeon;