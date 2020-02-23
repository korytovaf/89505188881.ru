$(function () {


	//меню бургер
	$('.burger, .menu a').on('click', function(e){
		e.preventDefault();

		$('.header__nav').fadeToggle(400, 'linear');
		
		$('.burger-btn').toggleClass('burger-btn-click');
	});
	


});