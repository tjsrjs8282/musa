		var mySwiper = new Swiper('.mainSlider .swiper-container',{
			speed:1000,
			loop: true,
			slidesPerView:4,
			centeredSlides:true,
			autoplay: {
			    delay: 3000,
			  },
		 	pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
		      },
		    breakpoints: {
		        1020: {
		          slidesPerView: 2,
		          spaceBetween: 20,
		        },
		      }
		}); 

		var mySwiper = new Swiper('.productSlider .swiper-container',{
			speed:1000,
			loop: true,
			slidesPerView:4,
			slideToclickedslide:true,
			spaceBetween: 40,
		    breakpoints: {
		        1020: {
		          slidesPerView: 2,
		          spaceBetween: 20,
		        },
		        560: {
		          slidesPerView: 1,
		          spaceBetween: 10,
		        }
		      }
		});

		var mySwiper = new Swiper('.instaSlider .swiper-container',{
			speed:600,
			loop: true,
			slidesPerView:6,
			centeredSlides:true,
			spaceBetween: 20,
			autoplay: {
			    delay: 5000,
			  },
		    breakpoints: {
		    	1400: {
		          slidesPerView: 5,
		          spaceBetween: 10,
		        },
		        1020: {
		          slidesPerView: 4,
		          spaceBetween: 10,
		        },
		        720:{
		          slidesPerView: 2,	
		        }
		      }
		});

		$(".hamberger").click(function(e){
			$(".allMenuWrap").toggleClass("active");
			e.preventDefault();
		});

		$(".mobileHamberger").click(function(){
			$(".open").toggleClass("active");
			$(".close").toggleClass("active");
			$(".mobileMenuWrap").toggleClass("active");
		});

		$(".tvLeftImg,.tvRightImg").click(function(){
			$(".tvModalWrap").addClass("active");
		});

		$(".mdalblack,.mdalClose").click(function(){
			$(".tvModalWrap").removeClass("active");
		});