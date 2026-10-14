export const initShowMoreCardsNewReceipts = () => {
  const container = document.querySelector(".new-collections__container");
  const btn = container.querySelector(".button-white");
  const cardsGrid = container.querySelector(".new-collections__wrapper-cards");

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
          "new-collections__wrapper-cards",
          "animate__animated",
          "animate__fadeIn",
          "animate__delay-0.2s",
        );
        extraCardsWrapper.innerHTML = `  <article class="best-seller__card card">
              <a class="card__link" href="#">
                <picture class="card__wrapper-image">
                  <source srcset="./image/cards/5.webp" type="image/webp" />
                  <img
                    class="card__image"
                    src="./image/cards/5.png"
                    alt="Футболка с лентой"
                  />
                </picture>

                <h3 class="card__title">Рубашка в полоску</h3>

                <div class="card__grade">
                  <img
                    class="card__icon-star"
                    src="./icons/cards-stars/card-stars-5.svg"
                    width="114"
                    height="19"
                    alt="5 звезд"
                  />

                  <p class="card__num">5.0/<span>5</span></p>
                </div>

                <div class="card__price">
                  <p class="card__price-text price-text">₽5000</p>
                  <p class="card__price-text price-removed">₽6000</p>
                  <p class="card__accent-text">-20%</p>
                </div>
              </a>
            </article>

            <article class="best-seller__card card">
              <a class="card__link" href="#">
                <picture class="card__wrapper-image">
                  <source srcset="./image/cards/6.webp" type="image/webp" />
                  <img
                    class="card__image"
                    src="./image/cards/6.png"
                    alt="Футболка с лентой"
                  />
                </picture>

                <h3 class="card__title">Футболка «Courage»</h3>

                <div class="card__grade">
                  <img
                    class="card__icon-star"
                    src="./icons/cards-stars/card-stars-4.svg"
                    width="90"
                    height="19"
                    alt="4 звезды"
                  />

                  <p class="card__num">4.0/<span>5</span></p>
                </div>

                <div class="card__price">
                  <p class="card__price-text price-text">₽5000</p>
                </div>
              </a>
            </article>

            <article class="best-seller__card card">
              <a class="card__link" href="#">
                <picture class="card__wrapper-image">
                  <source srcset="./image/cards/7.webp" type="image/webp" />
                  <img
                    class="card__image"
                    src="./image/cards/7.png"
                    alt="Футболка с лентой"
                  />
                </picture>

                <h3 class="card__title">Свободные бермуды</h3>

                <div class="card__grade">
                  <img
                    class="card__icon-star"
                    src="./icons/cards-stars/card-stars-3.svg"
                    width="66"
                    height="19"
                    alt="3 звезды"
                  />

                  <p class="card__num">3.0/<span>5</span></p>
                </div>

                <div class="card__price">
                  <p class="card__price-text price-text">₽4000</p>
                </div>
              </a>
            </article>

            <article class="best-seller__card card">
              <a class="card__link" href="#">
                <picture class="card__wrapper-image">
                  <source srcset="./image/cards/8.webp" type="image/webp" />
                  <img
                    class="card__image"
                    src="./image/cards/8.png"
                    alt="Футболка с лентой"
                  />
                </picture>

                <h3 class="card__title">Потертые узкие джинсы</h3>

                <div class="card__grade">
                  <svg width="104" height="19">
                    <use
                      class="card__icon-star"
                      href="./icons/cards-stars/card-stars-4,5.svg"
                    ></use>
                  </svg>
                  <p class="card__num">4.5/<span>5</span></p>
                </div>

                <div class="card__price">
                  <p class="card__price-text price-text">₽7000</p>
                </div>
              </a>
            </article>`;

        cardsGrid.after(extraCardsWrapper);

        btn.textContent = "Свернуть";
        return;
      } else {
        if (btn.textContent === "Свернуть") {
          extraCardsWrapper.classList.add(
            "new-collections__wrapper-cards--hidden",
          );

          btn.textContent = "Посмотреть все";
        } else {
          extraCardsWrapper.classList.remove(
            "new-collections__wrapper-cards--hidden",
          );

          btn.textContent = "Свернуть";
        }
      }
    }
  });
};
