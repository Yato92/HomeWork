import { heroBtn } from "./registration-form-button-header.js";
export const initShowRegistrationForm = () => {
  const btnContainer = document.querySelector(".header__container");
  const btnShowContainer = document.querySelector(".header__profile");
  const registrationContainer = document.querySelector(".registration-form");
  const btnCloseRegistrationContainer = document.querySelector(
    ".registration-form__close-btn",
  );
  const form = document.querySelector(".registration__form");
  const asideLink = document.querySelector(".promo-bar__link");
  const bodyPage = document.querySelector(".page__body");

  const closeModal = () => {
    registrationContainer.classList.add("registration-form--hidden");
    bodyPage.classList.remove("page__body--no-scroll");
  };

  const openModalAndAnimation = () => {
    (registrationContainer.classList.remove("registration-form--hidden"),
      form.classList.add(
        "animate__animated",
        "animate__fadeIn",
        "animate__faster",
      ));
    bodyPage.classList.add("page__body--no-scroll");
  };

  btnContainer.addEventListener("click", event => {
    event.stopPropagation();
    if (!btnContainer || !btnShowContainer) {
      return;
    }

    if (event.target.closest(".header__profile") === btnShowContainer) {
      openModalAndAnimation();
    }
  });

  registrationContainer.addEventListener("click", event => {
    if (
      event.target.closest(".registration-form__close-btn") ===
      btnCloseRegistrationContainer
    ) {
      closeModal();
    }
  });

  window.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  window.addEventListener("click", event => {
    if (
      !registrationContainer.classList.contains("registration-form--hidden") &&
      !registrationContainer.contains(event.target)
    ) {
      closeModal();
    }
  });

  heroBtn.addEventListener("click", event => {
    event.stopPropagation();
    openModalAndAnimation();
  });

  asideLink.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    openModalAndAnimation();
  });
};
