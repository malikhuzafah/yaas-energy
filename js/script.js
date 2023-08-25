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
    var c = 0;
    if ($("#name-input").val().length === 0) {
      $("#name-err").html("Name is required!");
    } else {
      $("#name-err").html("");
      c++;
    }
    if ($("#email-input").val().length === 0) {
      $("#email-err").html("Email is required!");
    } else {
      $("#email-err").html("");
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
      // Email.send({
      //     Host : "smtp.gmail.com",
      //     Username : "mhk282000@gmail.com",
      //     Password : "malik1122",
      //     To : 'huzafahrajput10@gmail.com',
      //     From : email,
      //     Subject : "This is the subject",
      //     Body : "And this is the body"
      // }).then(
      //   message => alert(message)
      // );
      // $('#submitted').html('Message Recived! Thank You :)');
    } else {
      $("#submitted").html("");
    }
  });
});

function scrollFunction() {
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80 ||
    $(window).width() < 992
  ) {
    $("#navbar").css("padding", "0 5%");
    $("#navbar").css("background", "#1C2331");
    $(".nav-link span, #navbarDropdown").css("color", "#fff");
    $("#navbar-btn button").removeClass("my-btn");
    $("#navbar-btn button").addClass("my-btn2");
  } else {
    $("#navbar").css("background-color", "transparent");
    $(".nav-link span, #navbarDropdown").css("color", "#125468");
    $("#navbar-btn button").addClass("my-btn");
    $("#navbar-btn button").removeClass("my-btn2");
    $("#navbar").css("padding", "2% 5%");
  }
}
$(document).ready(function () {
  $(".collapsible").click(function () {
    var con = $(this).next();
    if (con.height() <= "0") {
      con.height("250px");
      $(this).css("border-radius", "20px 20px 0 0");
      $(this).css("transition", "0.3s ease-out");
    } else {
      con.height("0");
      $(this).css("border-radius", "20px");
      $(this).css("transition", "0.3s ease-in");
    }
  });
});
