function add_nav_white() {
  $(".navbar").addClass("nav_white");
}
function rm_nav_white() {
  $(".navbar").removeClass("nav_white");
}
function scrollToTop() {
  $("html, body").animate({ scrollTop: $("#top").offset().top }, 0);
}
//load all members images
for (let i = 1; i < 10; i++) {
  $("<img/>")[0].src = "/../assets/img/members/session1/director" + i + ".jpg";
}
for (let i = 1; i < 4; i++) {
  $("<img/>")[0].src =
    "/../assets/img/members/session1/supervisor" + i + ".jpg";
}
$("<img/>")[0].src = "/../assets/img/members/session1/secretary1.jpg";
//animate background opacity on img loaded
$("<img/>")
  .attr("src", "/../assets/img/test.png")
  .on("load", function () {
    $(this).remove();
    $("#background_top").animate({ opacity: 1 }, 1000);
  });
$("<img/>")
  .attr("src", "/../assets/img/carousel/images1.jpg")
  .on("load", function () {
    $(this).remove();
    $(".item").animate({ opacity: 1 }, 1000);
  });
$(document).ready(function () {
  $(".carousel").animate({ opacity: 1 }, 1000);
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 1200;
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
  //hide repeated breadcrumb route on paginate page (eg: news)
  if ($(".route").html() === $("#breadcrumb_last").html()) {
    $(".route").hide();
    $(".prompt").first().hide();
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
//create pagination
jQuery(document).ready(function ($) {
  $(".news table tbody").paginathing({
    perPage: 10,
    insertAfter: "table",
    pageNumbers: true,
    firstLast: !0,
    pageNumbers: 0,
  });
});
$("#organization a").click(function (event) {
  let target = $(event.target);
  target.next(".info").slideToggle();
});
