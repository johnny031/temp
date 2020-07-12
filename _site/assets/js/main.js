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
  $route.html() === "about"
    ? $route.html("關於我們")
    : $route.html() === "news"
    ? $route.html("最新消息")
    : $route.html("公告");
  //hide breadcrumb at home page
  if (window.location.pathname == "/") {
    $("#breadcrumb").hide();
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
