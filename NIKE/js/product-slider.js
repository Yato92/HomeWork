export const productSlider = () => {
  new Swiper(".product__slider", {
    slidesPerView: "auto", // атомат показвать первый слайд
    centerSlides: true, // центрирование слайдера
    loop: true, // бескочный слайд]
    // Для прокрутки слайдера при помощи колесика мыши
    mousewheel: {
      forceToAxis: true,
    },
    // связываем кнопки на которые будем листать слайдер: первое предыдущий, второй следующий
    navigation: {
      prevEl: ".product__slider-button--left",
      nextEl: ".product__slider-button--right",
    },
  });
};
