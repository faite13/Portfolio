document.addEventListener('DOMContentLoaded', () => {
  const $introIcon = $('#intro-icon');
  const $bgTopZ = $('#intro-bg');
  const $animItems = $('.js-anim');
  const $window = $(window);
  const $loadScreen = $('.load-screen');

  const scrollHandler = () => {
    $animItems.each((i, item) => {
      const $item = $(item);
      const height = $item.outerHeight();
      const offset = $item.offset().top;

      const ANIM_START = 4;
      const WINDOW_INNER_H = $window.innerHeight();
      const PAGE_Y_OFFSET = $window.scrollTop();

      const itemPoint =
        height > WINDOW_INNER_H
          ? WINDOW_INNER_H - WINDOW_INNER_H / ANIM_START
          : WINDOW_INNER_H - height / ANIM_START;

      const isInScrollView = PAGE_Y_OFFSET > offset - itemPoint && PAGE_Y_OFFSET < offset + height;

      if (isInScrollView) {
        setTimeout(() => {
          $item.addClass('active');
        }, 300);
      }
    });
  };

  $introIcon.hover(
    () => {
      $bgTopZ.toggleClass('blured');
    },
    () => {
      $bgTopZ.toggleClass('blured');
    },
  );

  if ($animItems.length > 0) {
    $window.on('scroll', scrollHandler);
  }

  setTimeout(() => {
    $loadScreen.fadeOut(600);
  }, 1000);
});