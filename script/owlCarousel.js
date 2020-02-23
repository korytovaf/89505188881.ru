$(document).ready(function(){
  
 


	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 20,
		dotsEach: 1,


		responsive:{
			0:{
				items: 1,
			},
			800:{
				items: 2

			},
			1224:{
				items: 3,
				dots:false,
				nav: true,
			}
		}
	});




});