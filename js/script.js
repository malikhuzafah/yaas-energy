var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    a = 1;
  }
});

var loc = "commercial";

function filter() {
  var value = $(this).attr("data-filter");
  if (value == "all") {
    $(".filter").show("1000");
  } else {
    $(".filter")
      .not("." + value)
      .hide("3000");
    $(".filter")
      .filter("." + value)
      .show("3000");
  }
  if ($(".filter-button").removeClass("tab-active")) {
    $(this).removeClass("tab-active");
  }
  $(this).addClass("tab-active");
}

var icons = {
  React: "devicon-react-original",
  "React-native": "devicon-react-original",
  NodeJs: "devicon-nodejs-plain",
  Express: "devicon-express-original",
  MongoDB: "devicon-mongodb-plain",
  Flutter: "devicon-flutter-plain",
  Unity: "devicon-unity-original",
  Firebase: "devicon-firebase-plain",
  JQuery: "devicon-jquery-plain",
  Bootstrap: "devicon-bootstrap-plain",
};

function openModal() {
  var source = this.getAttribute("data-source");
  var demo = this.getAttribute("data-demo");
  var visit = this.getAttribute("data-visit");
  console.log(visit);
  var buttons = $("#modal-buttons");
  buttons.empty();
  if (source != null) {
    buttons.append(
      '<a href="' +
        source +
        '" target="_blank"><span class="btn my-btn">Code <em class="fa-solid fa-up-right-from-square"></em></span></a>'
    );
  }
  if (demo != null) {
    buttons.append(
      '<a href="' +
        demo +
        '" target="_blank"><span class="btn my-btn">Demo <em class="fa-solid fa-up-right-from-square"></em></span></a>'
    );
  }
  if (visit != null) {
    buttons.append(
      '<a href="' +
        visit +
        '" target="_blank"><span class="btn my-btn">Visit <em class="fa-solid fa-up-right-from-square"></em></span></a>'
    );
  }
  var tools = this.getAttribute("data-tools");
  var toolsSplit = tools.split(" ");
  var modalTools = $("#modal-tools");
  modalTools.empty();
  toolsSplit.forEach((element) => {
    modalTools.append(
      '<div class="col-6 col-sm-4"><span class="h6"><i class="' +
        icons[element] +
        '"></i> ' +
        element +
        "</span></div>"
    );
  });
  $("#staticBackdropLabel").html(this.getAttribute("data-title"));
  $("#modal-subtitle").html(this.getAttribute("data-subtitle"));
  $("#modal-description").html(this.getAttribute("data-description"));
}

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 40,
    },
    500
  );
});

function opennav() {
  var nav = document.getElementById("navbarSupportedContent");
  nav.style.height = "0";
}

function todayDate() {
  var d = new Date();
  var n = d.getFullYear() + "  ";
  return (document.getElementById("date").innerHTML = n);
}

function openNav() {
  $("#navbarSupportedContent").css("width", "100%");
  $("html, body").css({
    overflow: "hidden",
    height: "100%",
  });
}

function closeNav() {
  $("#navbarSupportedContent").css("width", "0");
  $("html, body").css({
    overflow: "auto",
    height: "auto",
  });
}

function backNav() {
  $("#navbarSupportedContent").css("width", "100%");
  $("#navbarSupportedContent2").css("width", "0");
  $("html, body").css({
    overflow: "hidden",
    height: "100%",
  });
}

function openProjects() {
  $("#navbarSupportedContent2").css("width", "100%");
  $("#navbarSupportedContent").css("width", "0");
  // $("#navbarSupportedContent").html(
  //   '<ul class="navbar-nav mx-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link nav-close" id="about-link" href="#"><span>Residents</span></a></li><li class="nav-item"><a class="nav-link nav-close" id="portfolio-link" href="./faqs.html"><span>FAQ\'s</span></a></li><li class="nav-item"><a class="nav-link nav-close" id="education-link" href="./career.html"><span>Career</span></a></li><li class="nav-item"><a class="nav-link nav-close" id="skills-link" href="./partners.html"><span>Partners</span></a></li></ul>'
  // );
}

$(function () {
  if ($(window).width() > 991) {
    $(".closebtn").hide();
    $(".backBtn").hide();
  } else {
    $(".closebtn").show();
    $(".backBtn").show();
  }
  window.addEventListener("resize", function () {
    if ($(window).width() > 991) {
      $(".closebtn").hide();
      $(".backBtn").hide();
    } else {
      $(".closebtn").show();
      $(".backBtn").show();
    }
  });
  $("#navbar-toggle").click(openNav);
  $("#navbar-close-btn").click(closeNav);
  $(".nav-close").click(closeNav);
  $("#proj-link").click(openProjects);
  $("#navbar-back-btn").click(backNav);
  $(".projects-info").click(openModal);
  $(".project-item-container").click(openModal);
  $(".filter-button").click(filter);
  if (localStorage.getItem("loc") !== null) {
    $(".filter")
      .not("." + localStorage.getItem("loc"))
      .hide("3000");
    $(".filter")
      .filter("." + localStorage.getItem("loc"))
      .show("3000");
    if ($(".filter-button").removeClass("tab-active")) {
      $("." + localStorage.getItem("loc") + "-tab").removeClass("tab-active");
    }
    $("." + localStorage.getItem("loc") + "-tab").addClass("tab-active");
  } else {
    $(".filter")
      .not("." + "residential")
      .hide("3000");
    $(".filter")
      .filter("." + "residential")
      .show("3000");
    if ($(".filter-button").removeClass("tab-active")) {
      $(".residential-tab").removeClass("tab-active");
    }
    $(".residential-tab").addClass("tab-active");
  }

  $(".residential-link").click(() => {
    localStorage.setItem("loc", "residential");
    location.replace("./projects.html");
  });
  $(".commercial-link").click(() => {
    localStorage.setItem("loc", "commercial");
    location.replace("./projects.html");
  });
  $(".industrial-link").click(() => {
    localStorage.setItem("loc", "industrial");
    location.replace("./projects.html");
  });
  $(".agricultural-link").click(() => {
    localStorage.setItem("loc", "agricultural");
    location.replace("./projects.html");
  });

  todayDate();
  // $("#navbar-toggle").click(opennav);
  window.onscroll = function () {
    scrollFunction();
  };
  $(".navbar-brand").click(function () {
    $(window).scrollTop(0);
  });
  $(".nav-link-scroll").click(function () {
    $(window).scrollTop(0);
  });

  $("#send").click(function () {
    $("#submitted").empty();
    $("#send").hide();
    $("#spinner").show();
    var c = 0;
    if ($("#name-input").val().length === 0) {
      $("#name-err").html("Name is required!");
    } else {
      $("#name-err").html("");
      c++;
    }
    if ($("#phone-input").val().length === 0) {
      $("#phone-err").html("Phone number is required!");
    } else {
      $("#phone-err").html("");
      c++;
    }
    if ($("#msg-input").val().length === 0) {
      $("#msg-err").html("Please enter some Message!");
    } else {
      $("#msg-err").html("");
      c++;
    }
    if (c >= 3) {
      var email = $("#email-input").val();
      var name = $("#name-input").val();
      var phone = $("#phone-input").val();
      var city = $("#email-input").val();
      var type = $("#type-input").val();
      var bill = $("#bill-input").val();
      var message = $("#msg-input").val();
      $.ajax({
        url: "https://formsubmit.co/ajax/huzafahrajput10@gmail.com",
        method: "POST",
        data: {
          name,
          email,
          phone,
          city,
          type,
          bill,
          message,
        },
        dataType: "json",
        success: function (res) {
          $("#name-input").val("");
          $("#email-input").val("");
          $("#msg-input").val("");
          $("#phone-input").val("");
          $("#city-input").val("");
          $("#bill-input").val("");
          $("#type-input").val("");
          $("#send").show();
          $("#spinner").hide();
          $("#submitted").html("Message recieved<br>We will contact you soon!");
        },
        error: function (err) {
          $("#send").show();
          $("#spinner").hide();
          alert("Somethong went wrong!");
        },
      });
    } else {
      $("#submitted").html("");
      $("#send").show();
      $("#spinner").hide();
    }
  });
});

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 80 ||
//     document.documentElement.scrollTop > 80 ||
//     $(window).width() < 992
//   ) {
//     $("#navbar").css("padding", "0 5%");
//     $("#navbar").css("background", "#1C2331");
//     // $(".nav-link span, #navbarDropdown").css("color", "#fff");
//     $(".nav-link").css("color", "#fff");
//     $(".nav-link").hover(
//       function () {
//         $(this).css("color", "#fff");
//       }
//       // function () {
//       //   $(this).css("color", "#fff");
//       // }
//     );
//     // $("#navbarDropdown").css("color", "#fff");
//     $("#navbar-btn button").removeClass("my-btn");
//     $("#navbar-btn button").addClass("my-btn2");
//   } else {
//     $("#navbar").css("background-color", "transparent");
//     $(".nav-link").css("color", "#125468");
//     $(".nav-link").hover(
//       function () {
//         $(this).css("color", "#fff");
//       },
//       function () {
//         $(this).not(".active-link").css("color", "#125468");
//       }
//     );
//     // $("#navbarDropdown").css("color", "#125468");
//     $(".active-link").css("color", "#fff");
//     $("#navbar-btn button").addClass("my-btn");
//     $("#navbar-btn button").removeClass("my-btn2");
//     $("#navbar").css("padding", "2% 5%");
//   }
// }
$(document).ready(function () {
  $(".minus").hide();
  $(".collapsible").click(function () {
    var minus = $(this).find(".minus");
    var plus = $(this).find(".plus");
    if (minus.is(":visible")) {
      minus.hide();
      plus.show();
    } else {
      minus.show();
      plus.hide();
    }
    // var con = $(this).next();
    // if (con.height() <= "0") {
    //   con.height("250px");
    //   // $(this).css("border-radius", "20px 20px 0 0");
    //   $(this).css("transition", "0.3s ease-out");
    // } else {
    //   con.height("0");
    //   // $(this).css("border-radius", "20px");
    //   $(this).css("transition", "0.3s ease-in");
    // }
  });
});
