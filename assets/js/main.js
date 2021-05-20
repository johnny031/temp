let note;
let current_note;
function add_nav_white() {
  $(".navbar").addClass("nav_white");
}
function rm_nav_white() {
  $(".navbar").removeClass("nav_white");
}
function scrollToTop() {
  $("html, body").animate(
    { scrollTop: $("#news-content").offset().top - 90 },
    0
  );
}
function scrollToTable() {
  $("html, body").animate(
    { scrollTop: $(".news_table").offset().top - 100 },
    0
  );
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

  //get News data via ajax
  $.ajax({
    method: "GET",
    url: "https://taiict.herokuapp.com/json-data",
    success: function (data) {
      note = data;
    },
    complete: function () {
      for (let i = 0; i < note.length; i++) {
        note[i][1] = tagToPlainText(note[i][1]);
        note[i][3] = tagToPlainText(note[i][3]);
        $("#news_table").prepend(
          `
        <tr>
          <td class="text-center author_td">` +
            note[i][1] +
            `</td>
          <td class="text-center date_td">` +
            note[i][2].slice(0, 10) +
            `</td>
          <td class="title_td">
            <a onClick="changeNewsContent(` +
            note[i][0] +
            `)">` +
            note[i][3] +
            `</a>
          </td>
        </tr>
      `
        );
      }
      //create pagination
      $(".news table tbody").paginathing({
        perPage: 10,
        insertAfter: "table",
        pageNumbers: true,
        firstLast: !0,
        pageNumbers: 0,
      });
    },
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
$("#organization a").click(function (event) {
  let target = $(event.target);
  target.next(".info").slideToggle();
});

function changeNewsContent(newsId) {
  for (let i = 0; i < note.length; i++) {
    if (note[i][0] == newsId) {
      current_note = note[i];
    }
  }
  $("#news-content").empty();
  $("#news-content").hide();
  $("#news-content").append(
    `
    <h2>` +
      current_note[3] +
      `</h2>
    <p>` +
      current_note[2] +
      ` - ` +
      current_note[1] +
      `</p>
    <div class="content">` +
      current_note[4] +
      `</div>
  `
  );
  $("#news-content").fadeIn("slow");
  scrollToTop();
}
function tagToPlainText(code) {
  let text = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return text;
}
