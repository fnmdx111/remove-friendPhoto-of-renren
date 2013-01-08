/**
 * created by orz@mad4a.me with pirated webstorm
 * at 12-12-13 下午9:45
 */

console.log('test loaded');

var INTERVAL = 5000;

window.setInterval(function () {
    $.each($('div[id^="ad"]'), function (idx, obj) {
        console.log(idx + ' ' + $(obj).attr('id'));
        $(obj).hide();
    });
}, INTERVAL);

$('div#friendPhoto').hide();

