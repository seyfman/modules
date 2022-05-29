// при необходимости изменить класс анимации(show)
const tabs = (dataTabs, dataTabsContent, activeClass, hiddenClass) => {
  const tabs = document.querySelector(dataTabs);
  const tabsBtn = document.querySelector(dataTabs).children;
  const tabsContent = document.querySelector(dataTabsContent);
  const tabsContentItem = document.querySelector(dataTabsContent).children;

  function hideTabsContent() {
    for (let i = 0; i < tabsBtn.length; i++) {
      tabsBtn[i].classList.remove(activeClass);
      tabsContentItem[i].classList.add(hiddenClass);
      tabsContentItem[i].classList.remove('show');
    }
  };

  function showTabsContent(i = 0) {
    tabsBtn[i].classList.add(activeClass);
    tabsContentItem[i].classList.remove(hiddenClass);
    tabsContentItem[i].classList.add('show');
  };

  hideTabsContent();
  showTabsContent();

  tabs.addEventListener('click', (e) => {
    const target = e.target;
    for (let i = 0; i < tabsBtn.length; i++) {
      if (target == tabsBtn[i]) {
        hideTabsContent();
        showTabsContent(i);
      }
    }
  });

};

export default tabs;