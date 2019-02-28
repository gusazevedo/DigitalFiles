/* 
 *  ABAS DE NAVEGACAO
*/

var active_aba = '';
var prev_aba = '';
var next_aba = '';

$('a[data-toggle="pill"]').on('show.bs.tab', function (e) {
    active_aba = e.target;
    // prev_aba = e.relatedTarget;
    prev_aba = $(active_aba).prev();
    next_aba = $(active_aba).next();
});

$('#next_aba').click(function(){
    $(next_aba).tab('show');
});

$('#prev_aba').click(function(){
    $(prev_aba).tab('show');
});

$('#aba_1').tab('show');