export const initShowMenu = () => {
  const linkShop = document.querySelector(".menu__link");
  const btnShop = document.querySelector(".menu__button");
  const menuHidden = document.querySelector(".menu-hidden");
  const parentContainer = document.querySelector(".header__container");
  const burgerList = document.querySelector(".header__menu");
  const page = document.querySelector(".page__body");
  const main = document.querySelector(".main");
  const burgerIcon = document.querySelector(".header__burger");

  if (!menuHidden) return;

  const closeAndOpenMenuHidden = () => {
    menuHidden.classList.toggle("menu--hidden");
  };

  const closeMenuHidden = () => {
    menuHidden.classList.add("menu--hidden");
  };

  if (parentContainer) {
    parentContainer.addEventListener("click", event => {
      if (
        event.target.closest(".menu__link") === linkShop ||
        (btnShop && event.target.closest(".menu__button") === btnShop)
      ) {
        closeAndOpenMenuHidden();
      }
    });
  }

  window.addEventListener("click", event => {
    if (
      !menuHidden.classList.contains("menu--hidden") &&
      !menuHidden.contains(event.target)
    ) {
      closeMenuHidden();
    }
  });

  if (burgerList) {
    burgerList.addEventListener("click", () => {
      closeMenuHidden();
    });
  }

  const closeAllMenus = () => {
    burgerList.classList.remove("header__menu--open");
    page.classList.remove("page__body--no-scroll");
    main.removeAttribute("style");
    burgerIcon.classList.remove("burger--open");
    burgerIcon.setAttribute("aria-expanded", "false");
    burgerIcon.setAttribute("aria-label", "Открыть меню");
  };

  burgerList.addEventListener("click", event => {
    if (event.target.closest(".menu-hidden") === menuHidden) {
      closeAllMenus();
    }

    burgerList.addEventListener("click", event => {
      const clickedLi = event.target.closest(".menu__item");
      if (!clickedLi) return;

      const activeLink = clickedLi.querySelector(
        '.menu__link[aria-expanded="true"]',
      );

      if (activeLink) {
        closeAllMenus();
      }
    });
  });
};
