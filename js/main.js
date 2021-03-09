$(function(){
	$nav = $('.wrapper_menu');
	
	$window = $(window);
	$h = $nav.offset().top;
    
	$window.scroll(function(){
		if ($window.scrollTop() > $h) {
			$nav.addClass('fixed');
		} else {
			$nav.removeClass('fixed');
		}
	});
//    $window.scroll(function(){
//        $nav1 = $('.content_menu');
//        $h1 = $nav1.offset().top
//        console.log($nav.outerWidth());
//        
//        $nav1.css('width', $nav1.outerWidth());
//        if($window.scrollTop() > $h){
//            $nav1.addClass('fixed_content');
//        }else {
//			$nav1.removeClass('fixed_content');
//		}
////        if($window.scrollTop() > 1100){
//////            $nav1.removeClass('fixed_content');
////      }
//    });
});