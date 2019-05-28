/* skip */
$('.skip a').on('focus', function(){
    $(this).stop().animate({"top":0, "opacity":1});
});
$('.skip a').on('click', function(){
    $(this).stop().animate({"top":"-40px", "opacity":0});
});
$('.skip a').on('focusout', function(){
    $(this).stop().animate({"top":"-40px", "opacity":0});
});

/* 메인 메뉴 마우스 오버 시 효과 */
$(".main-menu-list li a").hover(
    function(){
        var navMenu= $(this)
        var navWidth= $(this).width();
        var navUnderBar = $(this).parents().position().left + 15;
        
        hoveracticon()
        function hoveracticon(){
            $(navMenu).css({"color":"#0063cc", "transition":"all 0.2s ease-in-out"});
            $(".blue-bar").css({"position":"absolute", "left": navUnderBar, "bottom": "0", "width": navWidth , "border":"1px solid #0063cc", "transition":"all 0.3s ease-in-out"});            
        }
    },
    function(){
        $(this).css({"color":"#000", "transition":"all 0.2s ease-in-out"});
        $(".blue-bar").css({"width":"0px", "border":"0", "transition":"all 0.3s ease-in-out"});
    }
);

/* 배너 번호 마우스 오버 시 */
$(".banner-indicator li").hover(function(){
    $(this).children().children().css({"border-bottom": "1px solid #fff"});
}, function(){
    $(this).children().children().css({"border-bottom": "1px solid rgba(255, 255, 255, 0.0)"});
}
)

/*direct menu*/
$(".bot-btn li").hover(function(){
    $(this).children().children().css({"border-bottom": "1px solid rgba(255, 255, 255, 1)"});
},function(){
    $(this).children().children().css({"border-bottom": "1px solid rgba(255, 255, 255, 0.0)"});
}
)

/* 메인 배너 롤링 */
/* 배너 넘버 클릭 시 해당 번호의 배너 이미지 노출*/
// $('.banner-indicator li').click(function(){
//     var bannerIndex = $(this).index();
//     $(".banner-content-list li").css({"display" : "none"});
//     $(".banner-content-list li:eq(" + bannerIndex + ")").css({"display" : "block"});
// });


// var $imgList = $('.banner-content-list > li');
// var nImgCount = $imgList.length;	// 위에서 가져온 li의 개수
// var nDuration = 3000;					// 이미지를 변경할 시간
// var bAuto = true;						// 자동으로 변경할 지 여부
// var nIndex = 0;						// 변경할 이미지의 Index

// if(bAuto == true) {
// 	setInterval(autoSlide, nDuration);		// Javascript setInterval 함수 호출
// }

// function autoSlide() {
//     var bannerSum = $("banner-content-list .banner-content-item").each();
//     console.log(bannerSum);

// 	var next = (++nIndex % nImgCount);
// 	$($imgList.get(next - 1)).fadeOut(1000);
//     $($imgList.get(next)).fadeIn(1000);
// }