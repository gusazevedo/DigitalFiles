/* ABAS DE NAVEGACAO */

var active_aba = '';
var prev_aba = '';
var next_aba = '';

$('a[data-toggle="pill"]').on('show.bs.tab', function (e) {
    active_aba = e.target;
    prev_aba = $(active_aba).prev();
    next_aba = $(active_aba).next();

    window.scroll({
        top: $('#topo').height() + 480,
        left: 0,
        behavior: 'smooth'
    });
});

$('#next_aba').click(function(){
    $(next_aba).tab('show');
});

$('#prev_aba').click(function(){
    $(prev_aba).tab('show');
});

$('#aba_1').tab('show');

/*  TOOLTIPS  */

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('#element').tooltip('toggleEnabled');
})

/*  CONTROLE DE FONTES  */

$('.fonte-aumentar').click(function(){
    $('.aba p').css('font-size','+=3');
});

$('.fonte-normal').click(function(){
    $('.aba p').css('font-size','1rem');
});

$('.fonte-diminuir').click(function(){
    $('.aba p').css('font-size','-=3');
});

/* CONTRASTE */

$('.contraste').click(function(){
    $("body").toggleClass('sup-contraste');
});
