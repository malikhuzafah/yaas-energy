var a = 0;
$(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
            var $this = $(this),
            countTo = $this.attr("data-count");
            $({
                countNum: $this.text(),
            }).animate({
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
            });
        });
        a = 1;
    }
});

$(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - 40,
        },
        500
    );
});

function opennav() {
    var nav = document.getElementById("navbarSupportedContent");
    nav.style.height = "0";
}

function todayDate(){
    var d = new Date();
    var n = d.getFullYear() + "  ";
    return document.getElementById("date").innerHTML = n;
}

$(function() {
    todayDate();
    $('#navbar-toggle').click(opennav);
    window.onscroll = function() {scrollFunction()};
    $(".navbar-brand").click(function() {
        $(window).scrollTop(0);
    });
})

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 || $(window).width() < 992) {
        $("#navbar").css("padding", "0 5%");
        $("#navbar").css("background", "#1C2331");
        $(".nav-link span, #navbarDropdown").css("color", "#fff");
        // $(".nav-link span, #navbarDropdown").css("color", "#ffdb58");
        $("#cv button").removeClass("my-btn");
        $("#cv button").addClass("my-btn2");
    } else {
        $('#navbar').css('background-color','transparent');
        $(".nav-link span, #navbarDropdown").css("color", "#125468");
        $("#cv button").addClass("my-btn");
        $("#cv button").removeClass("my-btn2");
        $("#navbar").css("padding", "2% 5%");
    }
}