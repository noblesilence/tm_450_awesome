/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function() {
  /* start typed element */
  //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
  var subElementArray = $.map($(".sub-element"), function(el) {
    return $(el).text();
  });
  $(".element").typed({
    strings: subElementArray,
    typeSpeed: 30,
    contentType: "html",
    showCursor: false,
    loop: true,
    loopCount: true
  });
  /* end typed element */

  /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/

  var navOffset = $(".templatemo-nav").height();

  $(".templatemo-nav").singlePageNav({
    offset: navOffset,
    easing: "easeInOutExpo",
    speed: 1000,
    filter: ":not(.external)",
    updateHash: true
  });

  $("#aboutLink").click(function(e) {
    e.preventDefault();
    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - navOffset
        },
        1000,
        "easeInOutExpo",
        function() {
          window.location.hash = target;
        }
      );
  });

  /* start navigation top js */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 58) {
      $(".templatemo-nav").addClass("sticky");
    } else {
      $(".templatemo-nav").removeClass("sticky");
    }
  });

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $(".navbar-collapse a").click(function() {
    $(".navbar-collapse").collapse("hide");
  });
  /* end navigation top js */

  $("body").bind("touchstart", function() {});

  /* wow
    -----------------*/
  new WOW().init();
});

/* start preloader */
$(window).load(function() {
  $(".preloader").fadeOut(1000); // set duration in brackets
});
/* end preloader */
