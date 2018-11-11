((d)=>{
	var ini = 0;
	var dos = 2;
	//console.log(`${dos} prueba`);
	d.addEventListener("DOMContentLoaded", () => {
	  //$('.carousel').carousel()
	  	$(".video").click(function () {
		    var theModal = $(this).data("target"),
			videoSRC = $(this).attr("data-video"),
			videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
			$(theModal + ' iframe').attr('src', videoSRCauto);
			$(theModal + ' button.close').click(function () {
			  $(theModal + ' iframe').attr('src', videoSRC);
			});
		});

		$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
		  var $this = $(this),
		      label = $this.prev('label');

			  if (e.type === 'keyup') {
					if ($this.val() === '') {
		          label.removeClass('active highlight');
		        } else {
		          label.addClass('active highlight');
		        }
		    } else if (e.type === 'blur') {
		    	if( $this.val() === '' ) {
		    		label.removeClass('active highlight'); 
					} else {
				    label.removeClass('highlight');   
					}   
		    } else if (e.type === 'focus') {
		      
		      if( $this.val() === '' ) {
		    		label.removeClass('highlight'); 
					} 
		      else if( $this.val() !== '' ) {
				    label.addClass('highlight');
					}
		    }

		});

		$('.tab a').on('click', function (e) {
		  
		  e.preventDefault();
		  
		  $(this).parent().addClass('active');
		  $(this).parent().siblings().removeClass('active');

		  var link = this.href.split('/');
		  link = link[link.length - 1];
		  
		  var target = link;

		  $('.tab-content > div').not(target).hide();
		  
		  $(target).fadeIn(600);
		  
		});

		var altura = $('.menu').offset().top;
	
		$(window).on('scroll', function(){
			if ( $(window).scrollTop() > altura ){
				//$('.menu').removeClass('py-3');
				//$('.menu').addClass('py-0');
				$('.menu').addClass('menu-fixed');
			} else {
				$('.menu').removeClass('menu-fixed');
				//$('.menu').addClass('py-3');
				//$('.menu').removeClass('py-0');
			}
		});
	});
})(document);