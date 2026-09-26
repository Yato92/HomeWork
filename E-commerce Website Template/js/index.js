import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import { reviewsSlider } from "./reviews-slider.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header", // Голова сайта к котрой применяем
    HEADER_FIXED: "", // Добавляемое свойство(тень)
  });

  new BurgerMenu(
    {
      BURGER: "burger", // Кнопка на которую надо нажать, чтобы открыть бургер
      BURGER_OPEN: "burger--open", // Класс который накидываем на бургер, чтобы изменить на крестик
      HEADER_MENU: "header__menu", // Меню которое будет открываться
      HEADER_MENU_OPEN: "header__menu--open", // Модификатор на который будем получать меню справа (анимация)
      lABEL: {
        OPEN: "Открыть меню", // Изменение aria-lable - при открытии
        CLOSE: "Закрыть меню", //Изменение aria-lable - при закрытии
      },
      PAGE_BODY: "page__body", // Для чего применяем
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll", // Чтобы при открытии бургер меню, нельзя было скролить сайт, добавляем overflow-y: heeden
      MENU_LINK: "burger__icon-cross", // Закрытие бургер меню при клике на кнопку
      BREAKPOINT: 992, // То, на какому размере должно применяться меню
      MAIN: "main",
    },
    reviewsSlider(),
    // Убираем тень при открытие бургера у Header
  );
} catch (error) {
  console.error(error);
}
