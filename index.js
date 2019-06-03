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


/* 정보공개 버튼 클릭 시 노출 메뉴 */
// $(".news-menu-list .popup-open").click(function(event){
//     event.preventDefault();
//     $(".disclosure-popup-wrap").css({"display":"block"});
//     $(".drop-menu:before").css({"border-top": "5px solid rgba(0,0,0,0)", "border-bottom": "5px solid rgba(102,102,102,1)"});
// })
// $(".close-btn a").click(function(){
//     event.preventDefault();
//     $(".disclosure-popup-wrap").css({"display":"none"});
// })


// 정보공개 메뉴 클릭 시 노출되는 툽팁팝업
$(".tooltip-btn").on("click", function(e){
    e.preventDefault();
    var $this = $(this);
    var target = $this.attr("href");
    
    if(!$this.hasClass("open")){
        tooltipControl("open", $this, $(target));
    }else{
        tooltipControl("close", $this, $(target));
    }
 // (!$this.hasClass("open")) ? tooltipControl("open") : tooltipControl("close");
})
function tooltipControl(status, $el, $target){
    if( status == "open"){
        $el.addClass("open");
        $target.css({"display":"block"});
    }else if(status == "close"){
        $el.removeClass("open");
        $target.css({"display":"none"});
    }
}
$(".tooltip-wrap .close-btn").on("click", function(e){
    e.preventDefault();
    var tooltipWrap = $(this).parent(".tooltip-wrap")
    var tooltipId = "#" + tooltipWrap.attr("id");
    tooltipWrap.css({"display":"none"});
    $(".tooltip-btn[href='"+ tooltipId +"']").removeClass("open");
})




// Special KDB의 카드배너 좌우 이동 버튼
$(".spcial-banner-wrap .right-btn").on("click", function(){
    var cardLength = $(".rolling-banner li").length;
    var cardWidth = $(".rolling-banner li").outerWidth();
    var bannerPosi = $(".rolling-banner").position().left;
    if( - (bannerPosi - cardWidth * 4) <= (cardWidth * cardLength)){
    $(".rolling-banner").stop().animate({"left": bannerPosi - cardWidth}, 300);
    $(".right-btn button").css({"cursor":"pointer"});
}
else{
    $(".right-btn button").css({"cursor":"default"});
}
})

$(".spcial-banner-wrap .left-btn").on("click", function(){
    var cardLength = $(".rolling-banner li").length;
    var cardWidth = $(".rolling-banner li").outerWidth();
    var bannerPosi = $(".rolling-banner").position().left;
    if( - (bannerPosi - cardWidth * 5) >= (cardWidth * cardLength)){
    $(".rolling-banner").stop().animate({"left": bannerPosi + cardWidth}, 300);
    $(".left-btn button").css({"cursor":"pointer"});
}
else{
    $(".left-btn button").css({"cursor":"default"});
}
})


// Special KDB의 메뉴배너의 좌우 이동 버튼
$(".rolling-menu-wrap .right-btn").on("click", function(){
    var cardLength = $(".rolling-menu li").length;
    var cardWidth = $(".rolling-menu li").outerWidth();
    var bannerPosi = $(".rolling-menu").position().left;
    if( - (bannerPosi - cardWidth * 5) <= (cardWidth * cardLength)){
    $(".rolling-menu").stop().animate({"left": bannerPosi - cardWidth}, 300);
    $(".right-btn button").css({"cursor":"pointer"});
}
else{
    $(".right-btn button").css({"cursor":"default"});
}
})

$(".rolling-menu-wrap .left-btn").on("click", function(){
    var cardLength = $(".rolling-menu li").length;
    var cardWidth = $(".rolling-menu li").outerWidth();
    var bannerPosi = $(".rolling-menu").position().left;
    if( - (bannerPosi - cardWidth * 7) >= (cardWidth * cardLength)){
    $(".rolling-menu").stop().animate({"left": bannerPosi + cardWidth}, 300);
    $(".left-btn button").css({"cursor":"pointer"});
}
else{
    $(".left-btn button").css({"cursor":"default"});
}
})

