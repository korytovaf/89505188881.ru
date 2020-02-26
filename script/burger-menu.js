$(function () {


	$('.burger').on('click', function(e){
		e.preventDefault();

		$('.header__nav').slideToggle(100, 'linear');
		$('.burger-btn').toggleClass('burger-btn-click');
	});
	
	
	$('.header__nav_menu_list, .scroll-offset').on('click', function (e) {
		e.preventDefault();
	
		let href = $(this).attr('href');
		let offset = $(href).offset().top;

		$('body, html').animate({
			scrollTop: offset
		}, 600);

	});
	



});