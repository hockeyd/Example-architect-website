$(document).ready(function(){
	$('.next').on('click', function(){
		var currentimg = $('.active');
		var nextImg = currentimg.next();
		
		if(nextImg.length){
			
		currentimg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);		
		}
	});
	
	$('.prev').on('click', function(){
		var currentimg = $('.active');
		var prevImg = currentimg.prev();
		
		if(prevImg.length){
			
		currentimg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);		
		}
	});
});
