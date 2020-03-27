responsiveVoice.enableEstimationTimeout = false;
responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
$('.pausar').hide();
$('.continuar').hide();

// PLAY

$('.falar').on('click', function(){
	var paragrafos = $(current_aba + ' .ler');
	if (active_aba != current_aba){
		stop();
	}
	let texto = "";

	for (let i = 0; i < paragrafos.length; i++){
		texto += paragrafos[i].textContent
	}

	responsiveVoice.speak(texto);

	$('.pausar').show();
	$('.falar').hide();
});

// PAUSE

$('.pausar').on('click', function(){
	responsiveVoice.pause();
	$('.pausar').hide();
	$('.continuar').show();
})

// CONTINUE

$('.continuar').on('click', function(){
	responsiveVoice.resume();
	$('.pausar').show();
	$('.continuar').hide();
});

// STOP

$('.parar').on('click', function stop(){
	responsiveVoice.cancel();
	console.clear()
	$('.falar').show();
	$('.pausar').hide();
	$('.continuar').hide();
});
