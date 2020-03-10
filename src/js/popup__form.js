$(function () {


	// для вызова Popup окна, кнопкам прописать класс .order
	$('.order').on('click', function(e){
		e.preventDefault()
		$('.popup__form').fadeIn(400,
            function(){
                $('.popup') 
                    .css('display', 'block')
                    .animate({opacity: 1, left: '50%'}, 400);
        });
		$('html').addClass('popup__html_fixed');
		$('body').addClass('popup__body_fixed');
		$('#name').focus();
	});

	$('.popup__close, .popup__form').on('click', function(){
				
		$('.popup').animate({opacity: 0, left: '45%'}, 400, function(){
			$(this).css('display', 'none');
			$('.popup__form').fadeOut(400);
		});

		$('html').removeClass('popup__html_fixed');
		$('body').removeClass('popup__body_fixed');
	});

	$('input[type="tel"]').inputmask({"mask": "+7(999)999-99-99"});

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
				url: "../mailer/smart.php",
				data: $('form').serialize()
			}).done(function() {
				$(this).find("input").val("");

				$('.popup').fadeOut(400);
				

                $('.popup__alert') 
                    .css('display', 'block')
                    .animate({opacity: 1, left: '50%'}, 400);
        		

				$('form').trigger("reset");
			});
			return false;
		}
	});



	//Сообщение об успешной отправке формы
	$('.popup__alert_button').on('click', function(){
		
		$('.popup__alert').animate({opacity: 0, left: '45%'}, 400, function(){
			$(this).css('display', 'none');
			$('.popup__form').fadeOut(400);
		});

		$('html').removeClass('popup__html_fixed');
		$('body').removeClass('popup__body_fixed');
	});

});