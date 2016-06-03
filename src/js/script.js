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
  $('.thanksgiving__letters-gallery').owlCarousel({
    items: 5,
    nav: true,
    navText: [],
    loop: true,
    // autoplay:true,
    navigation: true,
    pagination: true,
    responsive: {
    }
  });
//Кнопка вверх
  var top_show = 1000; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
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
  // --------------------------------------------------------SOC BAR-----------------------------------
// Тултип при округлении числа товара
$('.product__amount').find('input[data-tooltip!=""]').qtip({
    content: {
        text: 'Произошло округление до целого кол-ва упаковок' // Tell qTip2 to look inside this attr for its content
    },
    position: {
      my:'left top',
      at:'center bottom',
      adjust: {
            x: -90,
            y: 12
        }
      },
    style: {
      def: false,
      classes: 'tooltip-style',
        tip: {
            corner: 'top center',
            mimic: 'center center',
            height: 8,
            width: 9
        }
      },
     hide: {
       event: false,
       inactive: 2000
     },
     show: false
}).on('focusout',function(){
  var val = $(this).val();
  if (val!=parseInt(val, 10) && val>'0') {
    $(this).val(parseInt(val,10)).qtip('option','content.text', 'Произошло округление до целого кол-ва упаковок').qtip('show');
  } ;
  if (val<='0')  {
    $(this).val('1').qtip('option','content.text', 'Введено некоректное числовое значение. Исправлено на 1').qtip('show'); // на случай если введено некоректное число товара
  };
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
// Появление класса added при добавлении товара в корзину
$('.product-add').on('click',function(event){
  event.preventDefault();
  $(this).toggleClass('added');
  if($(this).hasClass('added')) {
    $(this).text('В корзине');
  } else {
    $(this).text('Добавить');
  }
});

// Смена блоков в оформлении заказов - ДОСТАВКА
if($("input[name='delivery-type']")) {
  var deliveryVal=$("input[name='delivery-type']").val();
      if (deliveryVal=='self') {
      $('.delivery_coureer').hide();
    } else {
      $('.delivery_myself').hide();
    }
  $("input[name='delivery-type']").on('click',function(){
    if ($(this).val() == 'self') {
      $('.delivery_coureer').hide();
      $('.delivery_myself').show();
    } else {
      $('.delivery_myself').hide();
      $('.delivery_coureer').show();
    }
  })
}

// Смена данных,при клике
  $('.editing-link_block')
function changeZakazData (parent,itemClass,initClass,doneButton,cancelButton){
  $('.'+initClass).on('click',function(){
      event.preventDefault();
      $(this).hide() // прячем нашу ссылку Изменить
      .next().show(); // Показываем блок управления
      var parentObj=$(this).closest('.'+parent);
      var currentItem=parentObj.find('.'+itemClass);
      currentItem.hide() // прячем текстовый блок
      .next('input').show().val(currentItem.text());
  });
  $('.'+cancelButton).on('click',function(){
      event.preventDefault();
      var parentObj=$(this).closest('.'+parent);
      var input=parentObj.find('.hidden-input');
      input.hide().val(''); // прячем и чистим инпут
      parentObj.find('.'+itemClass).show();
      $(this).parent().hide() // прячем блок управления
      .prev().show(); // показываем ссылку Инита
    // Можно прописать Ajax запрос здесь
  });
  $('.'+doneButton).on('click',function(){
      event.preventDefault();
      var parentObj=$(this).closest('.'+parent);
      var input=parentObj.find('.hidden-input');
      input.hide();
      parentObj.find('.'+itemClass).text(input.val()).show();
      $(this).parent().hide() // прячем блок управления
      .prev().show(); // показываем ссылку Инита
    // Можно прописать Ajax запрос здесь
  });
};

changeZakazData('zakaz-form__item','value-datails','change_field_link','done_field_link','cancel_field_link');
changeZakazData('about-user__item','value-name','button-kab_change','button-kab_submit','button-kab_discard');
// Zakaz смена активного класа
$('.button-kab_change').on('click', function(event) {
  /* Act on the event */
  $('.about-user__item_active').each(function(index, el) {
      $(this).toggleClass('about-user__item_active');
  });
  $(this).closest('.about-user__item').toggleClass('about-user__item_active');
});

// Включение инпута при нажатии на нужную позицию input[type=radio]
$('input[name="subject-type"]').on('click', function(event) {
  var curVal=$(this).val();
    if(curVal=='other') {
      $(this).parent('label').siblings('.disabled').prop('disabled', false).focus();
    }
    else {
      $(this).parent('label').siblings('.disabled').prop('disabled', true);
    }
});
// Форма входа в PopUp
$('.authorization__login-link').on('click', function(event) {
  event.preventDefault();
  $('.log-in-wrap').bPopup({
    zIndex: 2

  });
  /* Act on the event */
});

// Вызов переключателя
      $('.filter-view__list').on('click','.filter-view__link',function(event){
        event.preventDefault ? event.preventDefault() : (event.returnValue=false);
        displayMode($(this));
      })

          // ПЕРЕКЛЮЧАТЕЛЬ DISPLAY MODE
    function displayMode(currentModeLink) {
      var currentMode=currentModeLink.attr('data-mode'),
        productWrap=$('.catalog-wrap');
      var modes = {
        'list': 'catalog-list-style',
        'block':'catalog-block-style'
      };
      productWrap.attr('class','catalog-wrap');
      $('.filter-view-line_active').removeClass('filter-view-line_active');
      $('.filter-view-blocks_active').removeClass('filter-view-blocks_active');
      switch (currentMode){
        case 'list':
               productWrap.addClass(modes.list);
               currentModeLink.find('.filter-view__icon').addClass('filter-view-line_active');
               break;
         case 'block':
               productWrap.addClass(modes.block);
               currentModeLink.find('.filter-view__icon').addClass('filter-view-blocks_active');
               break;
      }
    }




//
//
// конец $(document).ready
//
//

});
// ----------------------------------------------------
// ----------------------------------------слайдер для листов----------------------------------------
// $('.thanksgiving__letters-gallery').slick({
//   // infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000
// });

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
  // --------------------------------альтернатива-----------------------------
  // $(".vacancy__accordion-title:eq(1)").addClass("vacancy__accordion-link--active");
  // $(".vacancy__accordion-info:not(:eq(1))").hide();

  // $(".vacancy__accordion-title").click(function(){
  //   $(this)
  //     .next(".vacancy__accordion-info")
  //     .slideToggle("slow")
  //     .siblings(".vacancy__accordion-info:visible")
  //     .slideUp("slow");
  //   $(this)
  //     .toggleClass("vacancy__accordion-link--active");
  //   $(this)
  //     .siblings(".vacancy__accordion-title")
  //     .removeClass("vacancy__accordion-link--active");
  // });
    });
// ----------------------------------------------------------------------------------------
// var toggle_company_link = $('.about__company-link') // клас стиля ссылки
//   toggle_company_link.click( function(){
//    toggle_company_link.removeClass('about__company-link--active')   // клас активной ссылки
//     $(this).addClass('about__company-link--active')
//   })
//------------------------------------------ Lightbox---------------------------------------
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})
  // Lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
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





/////////////////////////////////////////////////////////////

// ----------qTip2 для таблицы заказов чтобы отобразить отзывы-------------
// Плагин qTip 2 http://qtip2.com/
// Можно подключить AJAX http://jsfiddle.net/qTip2/zok1Lyzo/

 $(document).ready(function()
 {
     // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
     $('.comment').each(function() {
         $(this).qtip({
            show: 'click',
            hide: 'click',
             content: {
                 text: $(this).next('.tooltip')
             },
              position: {
                my:'top left',
                at:'top right',
                adjust:{
                  y:-22
                },
              },
              style: {
                classes: 'tooltip-comment',
                width: 360,
                tip: {
                  corner: 'left top',
                  mimic: 'center center',
                  height: 10,
                  width: 10
                },
              }
         }).on('click', function(event) {
           event.stopPropagation();
           /* Act on the event */
           $(this).toggleClass('activated-comment');
         });;
     });
     $('.add_comment').add('.cancel_comment').on('click', function(event) {
         event.preventDefault();
         $('.activated-comment').toggleClass('activated-comment').qtip('hide');
     });
 });