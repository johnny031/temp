function add_nav_white() {
  $(".navbar").addClass("nav_white");
}
function rm_nav_white() {
  $(".navbar").removeClass("nav_white");
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
  //change nav background color on click when collapsed
  $(".navbar-toggle").on("click", function () {
    let expand = $(".navbar-toggle").attr("aria-expanded");
    if (expand === "false") {
      $(".navbar").css("background-color", "#316588");
    } else {
      $(".navbar").css("background-color", "transparent");
    }
  });
  //translate breadcrumb text
  let $route = $("#breadcrumb .route");
  $route.html() === "about" ? $route.html("關於我們") : $route.html("最新消息");
  //hide breadcrumb at home page
  if (window.location.pathname == "/") {
    $("#breadcrumb").hide();
  }
  //wrap members in rows
  let $set1 = $(".directors_list").children();
  let $set2 = $(".supervisors_list").children();
  let $set3 = $(".secretaries_list").children();
  let col_num = $(window).width() < 992 ? 2 : 3;
  for (let i = 0, len = $set1.length; i < len; i += col_num) {
    $set1.slice(i, i + col_num).wrapAll('<div class="row"></div>');
  }
  for (let i = 0, len = $set2.length; i < len; i += col_num) {
    $set2.slice(i, i + col_num).wrapAll('<div class="row"></div>');
  }
  for (let i = 0, len = $set3.length; i < len; i += col_num) {
    $set3.slice(i, i + col_num).wrapAll('<div class="row"></div>');
  }
});
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll > 0) {
    add_nav_white();
  } else {
    rm_nav_white();
  }
});
