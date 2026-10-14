export const initShowMoreCardsBestSeller = () => {
  const container = document.querySelector(".best-sellers__container");
  const btn = container.querySelector(".button-white");
  const cardsGrid = container.querySelector(".best-seller__wrapper-cards");

  if (!container || !btn || !cardsGrid) {
    return;
  }

  let extraCardsWrapper = null;

  container.addEventListener("click", event => {
    if (event.target.closest(".button-white") === btn) {
      event.preventDefault();
      if (!extraCardsWrapper) {
        extraCardsWrapper = document.createElement("div");
        extraCardsWrapper.style.display = "grid";
        extraCardsWrapper.classList.add(
          "best-seller__wrapper-cards",
          "animate__animated",
          "animate__fadeIn",
          "animate__delay-0.2s",
        );
        extraCardsWrapper.innerHTML = ` <article class="new-collections__card card">
              <a class="card__link" href="#">
                <picture class="card__wrapper-image">
                  <source srcset="./image/cards/1.webp" type="image/webp" />
                  <img
                    class="card__image"
                    src="./image/cards/1.png"
                    width="296"
                    height="243"
                    alt="Футболка с лентой"
                  />
                </picture>

                <h3 class="card__title">Футболка с лентой</h3>

                <div class="card__grade">
                  <img
                    class="card__icon-star"
                    src="./icons/cards-stars/card-stars-4,5.svg"
                    width="104"
                    height="19"
                    alt="4.5 звезд"
                  />
                  <p class="card__num">4.5/<span>5</span></p>
                </div>

                <div class="card__price">
                  <p class="card__price-text price-text">₽5000</p>
                </div>
              </a>
            </article>

            <article class="new-collections__card card">
              <a class="card__link" href="#">
                <picture class="card__wrapper-image">
                  <source srcset="./image/cards/2.webp" type="image/webp" />
                  <img
                    class="card__image"
                    src="./image/cards/2.png"
                    width="268"
                    height="259"
                    alt="Узкие джинсы"
                  />
                </picture>

                <h3 class="card__title">Узкие джинсы</h3>

                <div class="card__grade">
                  <img
                    class="card__icon-star"
                    src="./icons/cards-stars/card-stars-3,5.svg"
                    width="80"
                    height="19"
                    alt="3.5 звезд"
                  />

                  <p class="card__num">3.5/<span>5</span></p>
                </div>

                <div class="card__price">
                  <p class="card__price-text price-text">₽5000</p>
                  <p class="card__price-text price-removed">₽6000</p>
                  <p class="card__accent-text">-20%</p>
                </div>
              </a>
            </article>

            <article class="new-collections__card card">
              <a class="card__link" href="#">
                <picture class="card__wrapper-image">
                  <source srcset="./image/cards/3.webp" type="image/webp" />
                  <img
                    class="card__image"
                    src="./image/cards/3.png"
                    width="296"
                    height="238"
                    alt="Клетчатая рубашка"
                  />
                </picture>

                <h3 class="card__title">Клетчатая рубашка</h3>

                <div class="card__grade">
                  <img
                    class="card__icon-star"
                    src="./icons/cards-stars/card-stars-4,5.svg"
                    width="104"
                    height="19"
                    alt="4.5 звезд"
                  />

                  <p class="card__num">4.5/<span>5</span></p>
                </div>

                <div class="card__price">
                  <p class="card__price-text price-text">₽7000</p>
                </div>
              </a>
            </article>

            <article class="new-collections__card card">
              <a class="card__link" href="#">
                <picture class="card__wrapper-image">
                  <source srcset="./image/cards/4.webp" type="image/webp" />
                  <img
                    class="card__image"
                    src="./image/cards/4.png"
                    width="296"
                    height="234"
                    alt="Футболка с полосами"
                  />
                </picture>

                <h3 class="card__title">Футболка с полосами</h3>

                <div class="card__grade">
                  <img
                    class="card__icon-star"
                    src="./icons/cards-stars/card-stars-4,5.svg"
                    width="104"
                    height="19"
                    alt="4.5 звезд"
                  />
                  <p class="card__num">4.5/<span>5</span></p>
                </div>

                <div class="card__price">
                  <p class="card__price-text price-text">₽6000</p>
                  <p class="card__price-text price-removed">₽8000</p>
                  <p class="card__accent-text">-30%</p>
                </div>
              </a>
            </article>`;

        cardsGrid.after(extraCardsWrapper);

        btn.textContent = "Свернуть";
        return;
      } else {
        if (btn.textContent === "Свернуть") {
          extraCardsWrapper.classList.add("best-seller__wrapper-cards--hidden");

          btn.textContent = "Посмотреть все";
        } else {
          extraCardsWrapper.classList.remove(
            "best-seller__wrapper-cards--hidden",
          );

          btn.textContent = "Свернуть";
        }
      }
    }
  });
};
