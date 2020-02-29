$(function () {

	// для вызова Popup окна, кнопкам прописать класс .order
	$('.order').on('click', function(e){
		e.preventDefault()
		$('.popup').css('display', 'block');
		$('.popup__form').css('display', 'inline-block');
		$('html').addClass('popup__html_fixed');
		$('body').addClass('popup__body_fixed');
	});

	$('.popup__button_close').on('click', function(e){
		e.preventDefault()
		$('.popup').css('display', 'none');
		$('html').removeClass('popup__html_fixed');
		$('body').removeClass('popup__body_fixed');
	});

	//Отправка формы через mailer
	$('form').validate({
		errorPlacement(error, element) {
	    return true;
			},
			focusInvalid: false,
			rules: {
				name: {
					required: true,
				},
				phone: {
					required: true,
					digits: true
				},
			},
			submitHandler() {


		$.ajax({
				type: "POST",
				url: "../mailer/smart.php",
				data: $('form').serialize()
			}).done(function() {
				$(this).find("input").val("");
				$('.popup__form').css('display', 'none');
				$('.popup__alert').css('display', 'inline-block');
				$('form').trigger("reset");
			});
			return false;
		}
	});



	//Сообщение об успешной отправке формы
	$('.popup__alert_ok').on('click', function(e){
		e.preventDefault()
		$('.popup__alert').css('display', 'none');
		$('.popup').css('display', 'none');
		$('html').removeClass('popup__html_fixed');
		$('body').removeClass('popup__body_fixed');
	});


});