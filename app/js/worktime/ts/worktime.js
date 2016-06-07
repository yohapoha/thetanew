/// <reference path="../../../../typings/jquery/jquery.d.ts" />
(function worktimeDaySelect() {
    var line = $(".worktime-line");
    var date = new Date();
    var dayOfWeek = date.getDay() - 1;
    line.eq(dayOfWeek).addClass("worktime-line_hover");
})();
//# sourceMappingURL=worktime.js.map
