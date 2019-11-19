if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    (function () {
        window.scrollReveal = new scrollReveal({
            reset: true
        });
    })();
};
$("#carousel_2").FtCarousel({
    index: 0,
    auto: false
});
//根据参数名获得该参数  pname等于想要的参数名
function getParam(pname) {
    var params = location.search.substr(1); //  获取参数 平且去掉？
    var ArrParam = params.split('&');
    if (ArrParam.length == 1) {
        //只有一个参数的情况
        return params.split('=')[1];
    } else {
        //多个参数参数的情况
        for (var i = 0; i < ArrParam.length; i++) {
            if (ArrParam[i].split('=')[0] == pname) {
                return ArrParam[i].split('=')[1];
            }
        }
    }
}



// 回到顶部
function pageScroll() {
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0, -100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()', 100);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if (sTop == 0) clearTimeout(scrolldelay);
}

// 轮播图
$(function () {
    $('#dowebok').easyFader({
        fadeDur: 300
    });
});

function jumpForPhone(){
	$('#oiBtn').toggleClass("io")
	$('#navBox').toggleClass("navbox01 navbox")
	if ($('#navBox').hasClass("navbox01")) {
		$(".logobox img").src;
		$(".logobox img").attr('src', 'images/logo.svg').css("opacity", "0.4");

	} else {
		$(".logobox img").src;
		$(".logobox img").attr('src', 'images/logo.svg').css("opacity", "1");
	}
}