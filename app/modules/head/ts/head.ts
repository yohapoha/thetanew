/// <reference path="../../../../typings/jquery/jquery.d.ts" />

function contentHeight(page) {
	var screenHeight = document.documentElement.clientHeight;
	var content = page.find(".content");
	var menu = $(".menu");
	var logo = $(".logo");
	var greeting = $(".greeting");
	var social = $(".social");
	var freeSpace = screenHeight - (menu.height() + logo.height() + greeting.height() + social.height());
	var margin = Math.floor(freeSpace / 4);
	var bigMargin = Math.floor(margin*1.2)
	page.css("height", screenHeight);
	if(page.hasClass("page_image")) {
		content.css("height", screenHeight);
	}
	logo.css("margin-top", margin);
	greeting.css("margin-top", bigMargin);
	social.css("margin-top", bigMargin);
}
contentHeight($(".page"));
$(window).resize(function() {
	contentHeight($(".page"));
})