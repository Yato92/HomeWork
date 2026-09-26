export const reviewsSlider = () => {
  new Swiper(".reviews__slider", {
    slidesPerView: "auto", // Автоматическая ширина слайдов (задается в CSS)
    centeredSlides: true, // Центрируем активный слайд (исправлена опечатка)
    spaceBetween: 20, // Отступ между карточками (подставьте свой)
    loopedSlides: 5, // Количество слайдов для дублирования (у вас 5 карточек)
    initialSlide: 2,
    // 👇 Говорим, что оригинальных слайдов 5
    loopedSlides: 5,

    // 👇 Создаем 5 дополнительных клонов (всего будет 10), чтобы не было пустоты
    loopAdditionalSlides: 5,

    // Для прокрутки слайдера при помощи колесика мыши
    mousewheel: {
      forceToAxis: true,
    },

    // Связываем кнопки навигации
    navigation: {
      prevEl: ".reviews__slider-button--left",
      nextEl: ".reviews__slider-button--right",
    },
  });
};
