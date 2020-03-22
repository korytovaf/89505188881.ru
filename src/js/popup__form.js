$(function () {


	// для вызова Popup окна, кнопкам прописать класс .order
	$('.order').on('click', function(e){
		e.preventDefault()
		$('.popup__background').fadeIn(150,
            function(){
                $('.popup') 
                    .css('display', 'block')
                    .animate({opacity: 1, left: '50%'}, 150);
        });
		$('html').addClass('popup__html_fixed');
		$('body').addClass('popup__body_fixed');
		$('#name').focus();
	});

	$('.popup__close, .popup__background').on('click', function(){
				
		$('.popup').animate({opacity: 0, left: '45%'}, 150, function(){
			$(this).css('display', 'none');
			$('.popup__background').fadeOut(150);
		});

		$('html').removeClass('popup__html_fixed');
		$('body').removeClass('popup__body_fixed');
	});

	$('input[type="tel"]').inputmask({"mask": "+7 999 999 9999"});

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
				},
			},
			submitHandler() {


		$.ajax({
				type: "POST",
				url: "../libs/mailer/smart.php",
				data: $('form').serialize()
			}).done(function() {
				$(this).find("input").val("");

				$('.popup').fadeOut(150);
				
    $('.alert').css('display', 'block').animate({opacity: 1, left: '50%'}, 150);

				$('form').trigger("reset");
			});
			return false;
		}
	});



	//Сообщение об успешной отправке формы
	$('.alert__button').on('click', function(){
		
		$('.alert').animate({opacity: 0, left: '45%'}, 150, function(){
			$(this).css('display', 'none');
			$('.popup__background').fadeOut(150);
		});

		$('html').removeClass('popup__html_fixed');
		$('body').removeClass('popup__body_fixed');
	});

});