'use strict';
import tabs from "./modules/tabs.js";
import accordeon from "./modules/accordeon.js";

document.addEventListener('DOMContentLoaded', () => {
  // Подключение табов
  // Передать атрибут обертки табов, атрибут обертки контента, активный класс, класс невидимости
  tabs("[data-tabs]", '[data-tabs-content]', 'tabs-active', 'hidden');


  //Подключение аккордеона
  // Передать слассы title, content, hiddenClass(без точки), activeClass(без точки)
  accordeon('.accordeon__item-title', '.accordeon__item-content', 'accordeon__item-content--hidden', 'accordeon__item-content--active');
});