/// <reference path="../../../../typings/jquery/jquery.d.ts" />
function navigationFix(navigation) {
    var fixPosition = document.documentElement.clientHeight;
    var navigationHeight = navigation.outerHeight();
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition >= fixPosition) {
            navigation.css("top", 0);
        } else {
            navigation.css("top", -navigationHeight);
        }
    });
}
navigationFix($(".navigation"));
//# sourceMappingURL=navigation.js.map
