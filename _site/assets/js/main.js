function add_nav_white() {
  $("nav").addClass("nav_white");
}
function rm_nav_white() {
  $("nav").removeClass("nav_white");
}

$(document).ready(function () {
  let scroll = $(window).scrollTop();
  if (scroll > 0) {
    add_nav_white();
  } else {
    rm_nav_white();
  }
  // dropdown animation
  $(".dropdown").on("show.bs.dropdown", function (e) {
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown(250);
  });
  $(".dropdown").on("hide.bs.dropdown", function (e) {
    let time = $(window).width() < 768 ? 0 : 250;
    $(this).find(".dropdown-menu").first().stop(true, true).slideUp(time);
  });
});
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll > 0) {
    add_nav_white();
  } else {
    rm_nav_white();
  }
});
