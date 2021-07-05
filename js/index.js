"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var $introIcon = $("#intro-icon");
  var $bgTopZ = $("#intro-bg");
  var $animItems = $(".js-anim");
  var $window = $(window);
  var $loadScreen = $(".load-screen");

  var scrollHandler = function scrollHandler() {
    $animItems.each(function (i, item) {
      var $item = $(item);
      var height = $item.outerHeight();
      var offset = $item.offset().top;
      var ANIM_START = 4;
      var WINDOW_INNER_H = $window.innerHeight();
      var PAGE_Y_OFFSET = $window.scrollTop();
      var itemPoint =
        height > WINDOW_INNER_H
          ? WINDOW_INNER_H - WINDOW_INNER_H / ANIM_START
          : WINDOW_INNER_H - height / ANIM_START;
      var isInScrollView =
        PAGE_Y_OFFSET > offset - itemPoint && PAGE_Y_OFFSET < offset + height;

      if (isInScrollView) {
        setTimeout(function () {
          $item.addClass("active");
        }, 300);
      }
    });
  };

  $introIcon.hover(
    function () {
      $bgTopZ.toggleClass("blured");
    },
    function () {
      $bgTopZ.toggleClass("blured");
    }
  );

  if ($animItems.length > 0) {
    $window.on("scroll", scrollHandler);
  }

  setTimeout(function () {
    $loadScreen.fadeOut(600);
  }, 1000);
});