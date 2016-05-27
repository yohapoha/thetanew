/// <reference path="../../../../typings/jquery/jquery.d.ts" />
function contentHeight(page) {
    var screenHeight = document.documentElement.clientHeight;
    var content = page.find(".content");
    var menu = $(".head-menu");
    var logo = $(".head-logo");
    var greeting = $(".head-greeting");
    var social = $(".head-social");
    var freeSpace = screenHeight - (menu.height() + logo.height() + greeting.height() + social.height());
    var margin = Math.floor(freeSpace / 4);
    var bigMargin = Math.floor(margin * 1.2);
    page.css("height", screenHeight);
    if (page.hasClass("page_image")) {
        content.css("height", screenHeight);
    }
    logo.css("margin-top", margin);
    greeting.css("margin-top", bigMargin);
    social.css("margin-top", bigMargin);
}
contentHeight($(".js__contentHeight"));
$(window).resize(function () {
    contentHeight($(".js__contentHeight"));
});
//# sourceMappingURL=head.js.map
