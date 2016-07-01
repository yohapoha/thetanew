/// <reference path="../../../../typings/jquery/jquery.d.ts" />

function centralizeH(object:JQuery) {
	var parent:JQuery = object.parent();
	var parentWidth:number = parent.width();
	var objectWidth:number = object.outerWidth(true);
	var margin = Math.floor((parentWidth - objectWidth)/2);
	object.css("margin-left", margin);
}
function centralizeV(object:JQuery, content:boolean = false) {
	var padding:number = content?Math.floor($(".navigation").height()/2):0;
	var parent:JQuery = content?object.parent().parent():object.parent();
	var parentHeight:number = parent.height();
	var objectHeight:number = object.height();
	padding += Math.floor((parentHeight - objectHeight)/2);
	object.css("padding-top", padding);
}
function tableZebra() {
	var table = $(".table_zebra");
	table.map(function(index, element) {
		var table = $(element);
		var length = table.children().length;
		var rows = table.children();
		for(var i = 0; i < length; i+=2) {
			rows.eq(i).hasClass("table-row_head") || rows.eq(i).addClass("table-row_highlight");
		}
	})
}
centralizeH($(".js_centralizeH"));
centralizeV($(".js_centralizeV"));
centralizeV($(".worktime"), true);
centralizeV($(".warranty"), true);
centralizeV($(".contacts"), true);

tableZebra()
