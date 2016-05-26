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
// ---------------слайдер для товара с миниатюрами----------------
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

// Вызов плагина для селекторов с классом .selector
$('.selector').chosen({disable_search_threshold: 10});
// Отображение начальных значений полей select после нажатия сброса параметров любой формы на сайте
if($('form').find('.selector').size()!=0) {
  $('form').find('.selector').parents('form').find("*[type='reset']").on('click',function(event){
    event.preventDefault();
    form = $(this).parents("form").first();
    form[0].reset();    // actually reset the form
    form.find(".selector").trigger("chosen:updated");
  });
} ;
// конец $(document).ready
});
// ----------------------------------------------------

$('.thanksgiving__letters-gallery').slick({
  slidesToShow: 3,
  slidesToScroll: 1
});

// ---------------кнопки + - для товара ----------------
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

// -------------------------------аккордион вакансии ---------------------------------------
  $(".vacancy__accordion .vacancy__accordion-title:eq(1)").addClass("vacancy__accordion-link--active");
  $(".vacancy__accordion .vacancy__accordion-info:not(:eq(1))").hide();


  $(".vacancy__accordion .vacancy__accordion-title").click(function(){
    $(this).next(".vacancy__accordion .vacancy__accordion-info").slideToggle("slow")
    .siblings(".vacancy__accordion .vacancy__accordion-info:visible").slideUp("slow");
    $(this).toggleClass("vacancy__accordion-link--active");
    $(this).siblings(".vacancy__accordion .vacancy__accordion-title")
    .removeClass("vacancy__accordion-link--active");
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
  // Lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
/////////////////////////////////////////////////////////////////////
//=============================КАРТА==============================//
function initialize() {
    //получаем наш div куда будем карту добавлять
    var mapCanvas = document.getElementById('map_canvas');
    // задаем параметры карты
    var mapOptions = {
        //Это центр куда спозиционируется наша карта при загрузке
        center: new google.maps.LatLng(59.8937928, 30.2673562),
        //увеличение под которым будет карта, от 0 до 18
        // 0 - минимальное увеличение - карта мира
        // 18 - максимально детальный масштаб
        zoom: 16,
        //Тип карты - обычная дорожная карта
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    //Инициализируем карту
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Объявляем массив с нашими местами и маркерами
    var markers = [],
        myPlaces = [];
    //Добавляем места в массив
    myPlaces.push(new Place('Кировский район, ул. Оборонная, д.10', 59.8937928, 30.2673562, 'Санкт-Петербург'));
    //Теперь добавим маркеры для каждого места
    for (var i = 0, n = myPlaces.length; i < n; i++) {
        var marker = new google.maps.Marker({
            //расположение на карте
            position: new google.maps.LatLng(myPlaces[i].latitude, myPlaces[i].longitude),
            map: map,
            //То что мы увидим при наведении мышкой на маркер
            title: myPlaces[i].name
        });
        //Добавим попап, который будет появляться при клике на маркер
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + myPlaces[i].name + '</h5><br/>' + myPlaces[i].description
        });
        //привязываем попап к маркеру на карте
        makeInfoWindowEvent(map, infowindow, marker);
        markers.push(marker);
    }
}
function makeInfoWindowEvent(map, infowindow, marker) {
    //Привязываем событие КЛИК к маркеру
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}
//Это класс для удобного манипулирования местами
function Place(name, latitude, longitude, description){
    this.name = name;  // название
    this.latitude = latitude;  // широта
    this.longitude = longitude;  // долгота
    this.description = description;  // описание места
}
//Когда документ загружен полностью - запускаем инициализацию карты.
google.maps.event.addDomListener(window, 'load', initialize);


