/// <reference path="../../../../typings/jquery/jquery.d.ts" />

function centralizeH(object:JQuery) {
    var parent:JQuery = object.parent();
    var parentWidth:number = parent.width();
    var objectWidth:number = object.outerWidth(true);
    var margin = Math.floor((parentWidth - objectWidth)/2);
    object.css("margin-left", margin);
}
function centralizeV(object:JQuery, content:boolean) {
    var padding = content?Math.floor($(".navigation").height()/2):0;
    var parent:JQuery = content?object.parent().parent():object.parent();
    var parentHeight:number = parent.height();
    var objectHeight:number = object.height();
    padding += Math.floor((parentHeight - objectHeight)/2);
    console.log(parentHeight)
    object.css("padding-top", padding);
}
centralizeH($(".js_centralizeH"));
centralizeV($(".js_centralizeV"), true);