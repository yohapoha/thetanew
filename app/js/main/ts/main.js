/// <reference path="../../../../typings/jquery/jquery.d.ts" />
function centralizeH(object) {
    var parent = object.parent();
    var parentWidth = parent.width();
    var objectWidth = object.outerWidth(true);
    var margin = Math.floor((parentWidth - objectWidth) / 2);
    object.css("margin-left", margin);
}
function centralizeV(object, content) {
    if (typeof content === "undefined") { content = false; }
    var padding = content ? Math.floor($(".navigation").height() / 2) : 0;
    var parent = content ? object.parent().parent() : object.parent();
    var parentHeight = parent.height();
    var objectHeight = object.height();
    padding += Math.floor((parentHeight - objectHeight) / 2);
    object.css("padding-top", padding);
}
function tableZebra() {
    var table = $(".table_zebra");
    table.map(function (index, element) {
        var table = $(element);
        var length = table.children().length;
        var rows = table.children();
        for (var i = 0; i < length; i += 2) {
            rows.eq(i).hasClass("table-row_head") || rows.eq(i).addClass("table-row_highlight");
        }
    });
}
centralizeH($(".js_centralizeH"));
centralizeV($(".js_centralizeV"));
centralizeV($(".worktime"), true);
centralizeV($(".warranty"), true);
centralizeV($(".contacts"), true);

tableZebra();
//# sourceMappingURL=main.js.map
