$(function () {


	$('.burger').on('click', function(e){
		e.preventDefault();

		$('.header__nav').toggleClass('header__nav_click');
		$('.burger-btn').toggleClass('burger-btn-click');
	});
	
	
	$('.header__nav_menu_link').on('click', function (e) {
		e.preventDefault();
	
		let href = $(this).attr('href');
		let offset = $(href).offset().top;

		$('body, html').animate({
			scrollTop: offset
		}, 700);


		$('.header__nav').toggleClass('header__nav_click');
		$('.burger-btn').toggleClass('burger-btn-click');

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