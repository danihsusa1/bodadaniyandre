$(window).on("load", function () {
  $(".preloader").fadeOut(3000);

  let slideIndex = $(".slide.active").index();
  const slideLen = $(".slide").length;
  function slideShow() {
    $(".slide").removeClass("active").eq(slideIndex).addClass("active");
    if (slideIndex == slideLen - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    setTimeout(slideShow, 5000);
  }
  slideShow();
});

$(document).ready(function () {
  //nav toggle
  $(".hamburger-btn").click(function () {
    $(".header .nav").slideToggle();
  });
  $(".header .nav a").click(function () {
    if ($(window).width() < 780) {
      $(".header .nav").slideToggle();
    }
  });

  //fixed header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });
});

// Scroll
$.scrollIt({
  topOffset: -50,
});
