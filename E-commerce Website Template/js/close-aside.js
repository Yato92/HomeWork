export const initClosePromoBar = () => {
  const asidePromoBar = document.querySelector(".aside");
  const promoBtn = document.querySelector(".promo-bar__icon-close");

  const closeAside = event => {
    if (event.target.closest(".promo-bar__icon-close") === promoBtn) {
      asidePromoBar.classList.add("aside--close");
      asidePromoBar.removeEventListener("click", closeAside);
    }
  };

  asidePromoBar.addEventListener("click", closeAside);
};
