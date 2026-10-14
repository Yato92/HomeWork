export const initShowBasket = () => {
  const btnShowContainer = document.querySelector(".header__container ");
  const containerBasket = document.querySelector(".basket");
  const btnCloseBasket = document.querySelector(".basket__close-btn");

  if (!btnShowContainer || !containerBasket) return;

  const openBasket = () => {
    containerBasket.classList.remove("basket--hidden");

    containerBasket.classList.add(
      "animate__animated",
      "animate__fadeIn",
      "animate__faster",
    );
  };

  const closeBasket = () => {
    containerBasket.classList.add("basket--hidden");
    containerBasket.classList.remove(
      "animate__animated",
      "animate__fadeIn",
      "animate__faster",
    );
  };

  btnShowContainer.addEventListener("click", event => {
    const basketBtn = event.target.closest(".header__basket");

    if (basketBtn) {
      event.preventDefault();
      openBasket();
    }
  });

  if (btnCloseBasket) {
    btnCloseBasket.addEventListener("click", event => {
      event.preventDefault();
      closeBasket();
    });
  }

  window.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeBasket();
    }
  });

  window.addEventListener("click", event => {
    const isBasketOpen = !containerBasket.classList.contains("basket--hidden");

    const clickedOutsideBasket = !containerBasket.contains(event.target);

    const clickedOutsideBtn = !btnShowContainer.contains(event.target);

    if (isBasketOpen && clickedOutsideBasket && clickedOutsideBtn) {
      closeBasket();
    }
  });
};
