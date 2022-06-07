'use strict';
import tabs from "./modules/tabs.js";
import accordeon from "./modules/accordeon.js";
import modalWindow from "./modules/modal.js";
import geolocation from "./modules/location.js";
import livespan from "./modules/livespan.js";
import cooltext from "./modules/cooltext.js";





document.addEventListener('DOMContentLoaded', () => {
  // Подключение табов
  // Передать атрибут обертки табов, атрибут обертки контента, активный класс, класс невидимости
  tabs("[data-tabs]", '[data-tabs-content]', 'tabs-active', 'hidden');


  //Подключение аккордеона
  // Передать классы title, content, hiddenClass(без точки), activeClass(без точки)
  accordeon('.accordeon__item-title', '.accordeon__item-content', 'accordeon__item-content--hidden', 'accordeon__item-content--active');

  //Подключение модального окна
  // Передать классы: кнопка открытия окна, кнопка закрытия окна, класс окна, нужно ли закрывать модальное окно во клику на подложку.
  modalWindow('.modal__btn-open', '.modal-window__btn-closed', '.modal', true);

  // Подключение геолокации
  // Необходимо подключить <script src="https://api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU" type="text/javascript"></script>
  geolocation('.locations__city', '.locations__region', '.locations__country');

  // Сколько прожил
  modalWindow('.livespan-btn', '.livespan-btn__closed', '.livespan-modal', false);
  livespan();


  // Появляющийся текст
  // Передать класс текста
  // cooltext();

});