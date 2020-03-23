$(document).ready(function(){
  
 	let prev = '<div class="prev"></div>';
 	let next = '<div class="next"></div>';


	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 20,
		dotsEach: 1,


		responsive:{
			0:{
				items: 1
			},
<<<<<<< HEAD
			426:{
=======
			600:{
>>>>>>> scss
				items: 2

			},
			1025:{
				items: 3,
				dots:false,
				nav: true,
				navText: [
					prev,
					next
				],
			}
		}
	});

});