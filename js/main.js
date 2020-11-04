$(function () {
  var oldNum = '0';

  initialize_owl($('.slideCarousel0'));

  $('.product_tab li a').on('click', function (e) {
    e.preventDefault();
    var num = $(this).parent().index();

    //탭 active
    $('.product_tab li').removeClass('active');

    //슬라이더 탭 active
    $(this).parent().addClass('active');

    $('.slideTab' + num).show();
    $('.slideTab' + oldNum).hide();

    //슬라이더
    initialize_owl($('.slideCarousel' + num));
    destroy_owl($('.slideCarousel' + oldNum));

    oldNum = num;
  });

  function initialize_owl(el) {
    el.owlCarousel({
      loop: false,
      nav: false,
      items: 3,
      lazyLoad: true,
      smartSpeed: 1000,
      margin: 10,
    });
  }

  function destroy_owl(el) {
    el.trigger('destroy.owl.carousel');
  }
});
