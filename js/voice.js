responsiveVoice.enableEstimationTimeout = false;
responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");

$('.falar').on('click', function(){
	var paragrafos = $(current_aba + ' .paragrafo');
	let texto = "";

	for (let i = 0; i < paragrafos.length; i++){
		texto += paragrafos[i].textContent
	}
	responsiveVoice.speak(texto);
});

$('.parar').on('click', function(){
	responsiveVoice.cancel();
});