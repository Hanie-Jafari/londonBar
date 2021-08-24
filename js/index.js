$(function () {
  //loader
  $(".loader").hide();
  //elevator
  $(window).scroll(function () {
    if ($(window).scrollTop() > $("header").height()) {
      $(".elevator").fadeIn();
      $(".elevator").css("display", "flex");
    } else {
      $(".elevator").fadeOut();
    }
  });
  $(".elevator").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 100);
  });
  //burger menu
  const burgerButton = document.querySelector(".burger-menu");
  const burgerMenu = document.querySelector(".navbar-burger");
  const burgerCross = document.querySelector(".navbar-burger i");
  burgerButton.addEventListener("click", function () {
    burgerMenu.style.visibility = "visible";
    burgerMenu.style.opacity = "1";
  });
  burgerCross.addEventListener("click", function () {
    burgerMenu.style.visibility = "hidden";
    burgerMenu.style.opacity = "0";
  });
  //email part in footer
  const email = document.querySelector(".email-part input");
  const emailBtn = document.querySelector(".email-part .btn");
  emailBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (email.value.trim() == "") {
      $(email).css("border", "1px solid red");
      alert("Please fill out E-mail field!");
    } else if (
      email.value.length >= 7 &&
      email.value.includes("@") &&
      email.value.includes("gmail") &&
      email.value.includes("com")
    ) {
      setTimeout(function () {
        $(".result").show();
      }, 1500);
    }
  });
  email.addEventListener("keyup", function () {
    if (
      email.value.length >= 7 &&
      email.value.includes("@") &&
      email.value.includes("com") &&
      email.value.includes("gmail")
    ) {
      $(email).css("border", "1px solid green");
    }
  });
  email.addEventListener("keyup", function () {
    if (
      email.value.length < 7 ||
      email.value.includes("@") != true ||
      email.value.includes("com") != true ||
      email.value.includes("gmail") != true
    ) {
      $(email).css("border", "1px solid red");
    }
  });
});
