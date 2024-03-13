$(document).ready(function(){
	$('.slick-container').slick({
		infinite:true,
		centerMode: true,
		centerPadding: '50px',
		slidesToShow:3,
		slidesToScroll:1,
		arrows:true,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});

	$('.slick-photo').slick({
		slidesToShow:1,
		slidesToScroll:1,
		arrows:true,
		prevArrow: $('.photo-prev'),
		nextArrow: $('.photo-next'),
		autoplay: true,
		pauseOnHover: true
	});


	$('.btn').click(function(){
		$('.btn').removeClass('actived');
		$(this).addClass('actived');
	

	if($('.btn1').hasClass('actived')){
		$('.btn1').css('background','url(./img/car1_btn_active.png) 0 0 no-repeat');
		$('.car1').fadeIn(1000);
	}else{
		$('.btn1').css('background','url(./img/car1_btn.png) 0 0 no-repeat');		
		$('.car1').hide();
	}

	if($('.btn2').hasClass('actived')){
		$('.btn2').css('background','url(./img/car2_btn_active.png) 0 0 no-repeat');
		$('.car2').fadeIn(1000);
	}else{
		$('.btn2').css('background','url(./img/car2_btn.png) 0 0 no-repeat');		
		$('.car2').hide();
	}

	if($('.btn3').hasClass('actived')){
		$('.btn3').css('background','url(./img/car3_btn_active.png) 0 0 no-repeat');
		$('.car3').fadeIn(1000);
	}else{
		$('.btn3').css('background','url(./img/car3_btn.png) 0 0 no-repeat');		
		$('.car3').hide();
	}

	});

	if($('.btn1').hasClass('actived')){
		$('.btn1').css('background','url(./img/car1_btn_active.png) 0 0 no-repeat');
	}

	$('.slick-item').click(function(){
		$('.slick-item').removeClass('gray');
		$(this).addClass('gray');

		if($('.video1-img').hasClass('gray')){
			$('.yt iframe').attr('src','https://www.youtube.com/embed/KtbCQDXiBdE?rel=0&amp;showinfo=0');
		}else if($('.video2-img').hasClass('gray')){
			$('.yt iframe').attr('src', 'https://www.youtube.com/embed/UkE7P3B6xFI?rel=0&amp;showinfo=0');
		}else if($('.video3-img').hasClass('gray')){
			$('.yt iframe').attr('src', 'https://www.youtube.com/embed/ZRk1EjtChrI?rel=0&amp;showinfo=0');
		}else if($('.video4-img').hasClass('gray')){
			$('.yt iframe').attr('src', 'https://www.youtube.com/embed/hNlqxo44_CY?rel=0&amp;showinfo=0');
		}else if($('.video5-img').hasClass('gray')){
			$('.yt iframe').attr('src', 'https://www.youtube.com/embed/N1SKwtVbWXA?rel=0&amp;showinfo=0');
		}
		
	});
});