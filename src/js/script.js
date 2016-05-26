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
//Кнопка вверх
  var top_show = 500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#up-button').fadeIn();
      else $('#up-button').fadeOut();
    });
    $('#up-button').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
// Скрытие слайдера до полной загрузки страницы
  $(".carousel-wrap").css({'visibility': 'visible', 'opacity':'1' });
// Тултип при округлении числа товара
$('.product__amount').find('input[data-tooltip!=""]').qtip({
    content: {
        attr: 'data-tooltip' // Tell qTip2 to look inside this attr for its content
    },
    position: {
      my:'left top',
      at:'center bottom',
      adjust: {
            x: -90,
            y: 20
        }
      },
    style: {
      def: false,
      classes: 'tooltip-style',
        tip: {
            corner: 'top center',
            mimic: 'center center'
        }
      },
     hide: {
       event: false,
       inactive: 2000
     },
     show: false
}).on('focusout',function(){
  var val = $(this).val();
  if (val!==parseInt(val, 10)) {
    $(this).val(Math.round(val)).qtip('show');
  }

});



  // -----------------------------------SOC BAR----------------------------
  (function() {
  if (window.pluso)if (typeof window.pluso.start == "function") return;
  if (window.ifpluso==undefined) { window.ifpluso = 1;
    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
    s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
    var h=d[g]('body')[0];
    h.appendChild(s);
  }})();
// переключатель количества товара
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

// ---------------слайдер для товара с миниатюрами----------------
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
// ----------------------------------ACCCORDION-----------------------
$(".accordion__link").on('click', _accordion);
  function _accordion(e){
    e.preventDefault();
      $(this)
      .toggleClass("accordion__link_active")
      .siblings('.accordion-item__list')
      .stop(true, true)
      .slideToggle();
  }