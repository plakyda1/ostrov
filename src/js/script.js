$(document).ready(function(){
  // Сладер на главной странице
  $(".carousel-main").owlCarousel({
  	items: 1,
  	nav: true,
  	navText: [],
    loop: true,
  	autoplay:true,
  	responsive: {
  	}

  });
  $(".carousel-wrap").css({'visibility': 'visible', 'opacity':'1' });
  // --------------------------------------------------------SOC BAR-----------------------------------
  (function() {
  if (window.pluso)if (typeof window.pluso.start == "function") return;
  if (window.ifpluso==undefined) { window.ifpluso = 1;
    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
    s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
    var h=d[g]('body')[0];
    h.appendChild(s);
  }})();

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
});

// ----------------------------------------слайдер для товара с миниатюрами----------------------------------------
$(document).ready(function() {
      $('.product__amount .minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        return false;
      });
      $('.product__amount .plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        return false;
      });
    });
//------------------------------------------ Lightbox---------------------------------------
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})
//----------Cворачивание списка заказов на странице Zakaz-podtverd------------------------
