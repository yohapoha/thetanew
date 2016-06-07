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
    console.log(parentHeight);
    object.css("padding-top", padding);
}
centralizeH($(".js_centralizeH"));
centralizeV($(".js_centralizeV"));
centralizeV($(".worktime"), true);
//# sourceMappingURL=main.js.map
