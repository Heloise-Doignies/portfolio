
// FONCTIONS POUR LA PARTIE "EXPERIENCES"
var cercle1 = document.getElementById("exp-image1");
var exp1 = document.getElementById("exp-text1");
var cercle2 = document.getElementById("exp-image2");
var exp2 = document.getElementById("exp-text2");
var cercle3 = document.getElementById("exp-image3");
var exp3 = document.getElementById("exp-text3");
var cercle4 = document.getElementById("exp-image4");
var exp4 = document.getElementById("exp-text4");

function showExp1() {
    cercle1.style.opacity = "0";
    exp1.style.opacity = "1";
};

function hideExp1() {
    cercle1.style.opacity = "1";
    exp1.style.opacity = "0";
};

function showExp2() {
    cercle2.style.opacity = "0";
    exp2.style.opacity = "1";
};

function hideExp2() {
    cercle2.style.opacity = "1";
    exp2.style.opacity = "0";
};

function showExp3() {
    cercle3.style.opacity = "0";
    exp3.style.opacity = "1";
};

function hideExp3() {
    cercle3.style.opacity = "1";
    exp3.style.opacity = "0";
};

function showExp4() {
    cercle4.style.opacity = "0";
    exp4.style.opacity = "1";
};

function hideExp4() {
    cercle4.style.opacity = "1";
    exp4.style.opacity = "0";
};

//CODE CAROUSEL
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    loopAdditionalSlides: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // configuration pour les écrans au-delà de 576px:
      576: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: false,
        loop: false,
        slidesPerGroup:1,
        loopFillGroupWithBlank: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        loop: false,
        slidesPerGroup:1,
        loopFillGroupWithBlank: true,
      },
    },
  });
  