'use strict';
import tabs from "./modules/tabs.js";

document.addEventListener('DOMContentLoaded', () => {
  // Подключение табов
  // Передать атрибут обертки табов, атрибут обертки контента, активный класс, класс невидимости
  tabs("[data-tabs]", '[data-tabs-content]', 'tabs-active', 'hidden');

});