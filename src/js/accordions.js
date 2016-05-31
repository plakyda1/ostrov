// Объявление модуля
var myModule = (function () {

	// Инициализирует наш модуль
	function init () {
		_setUpListners();
	};

	// Прослушивает события 
	function _setUpListners () {
		$(".accordion__link").on('click', _accordion);
		$(".zakaz__quick-info").on('click', _accordionZakaz);
		$(".vacancy__accordion-title").on('click', _accordionVacancy);
	};

// ------------------------------------------------ACCCORDION-----------------------------------------
function _accordion(e){
	e.preventDefault();
	$(this)
	.toggleClass("accordion__link_active")
	.siblings('.accordion-item__list')
	.stop(true, true)
	.slideToggle();
}
function _accordionZakaz(e){
	e.preventDefault();
	$(this)
	.toggleClass("zakaz__quick-info_active")
	.siblings('.table-wrap')
	.stop(true, true)
	.slideToggle();
}
function _accordionVacancy(e){
	e.preventDefault();
	$(this)
	.toggleClass("vacancy__accordion-link--active")
	.next()
	.stop(true, true)
	.slideToggle();
}

	// Возвращаем объект (публичные методы) 
	return {
		init: init
	};

})();

// Вызов модуля
myModule.init();