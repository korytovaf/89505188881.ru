$(function () {


	$('.burger').on('click', function(e){
		e.preventDefault();

		$('.header__nav').toggleClass('header__nav_click');
		$('#overlay').toggleClass('overlay')
		$('.burger__btn').toggleClass('burger__btn_click');
	});
	
	
	$('.menu__link').on('click', function (e) {
		e.preventDefault();
	
		let href = $(this).attr('href');
		let offset = $(href).offset().top;

		$('body, html').animate({
			scrollTop: offset
		}, 700);

		$('.header__nav').toggleClass('header__nav_click');
		$('.burger__btn').toggleClass('burger__btn_click');
		$('#overlay').toggleClass('overlay')


	});


//Убираем меню по нажатию на overlay
	$('#overlay').on('click', function (e) {
		e.preventDefault();
	
		$('#overlay').toggleClass('overlay')
		$('.header__nav').toggleClass('header__nav_click');
		$('.burger__btn').toggleClass('burger__btn_click');

	});



	
	$('.scroll-offset').on('click', function (e) {
		e.preventDefault();
	
		let href = $(this).attr('href');
		let offset = $(href).offset().top;

		$('body, html').animate({
			scrollTop: offset
		}, 700);

	});

});