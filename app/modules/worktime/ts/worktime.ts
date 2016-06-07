/// <reference path="../../../../typings/jquery/jquery.d.ts" />
(function worktimeDaySelect() {
    var line:JQuery = $(".worktime-line");
    var date = new Date();
    var dayOfWeek:number = date.getDay() - 1;
    line.eq(dayOfWeek).addClass("worktime-line_hover");
})();