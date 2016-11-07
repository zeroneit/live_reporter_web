$(document).ready(function(){
	setBaseLanguage(setupIndex);
	return;
});

function setupIndex(lang)
{
	setupLanguage(lang);
	return;
}

function setupImage(lang)
{
	switch(lang){
	case 'en':
	default:
		$('#vlc_network_menu').attr('src', 'img/VLCNetworkMenu_EN.png');
		$('#vlc_network_dialog').attr('src', 'img/VLCNetworkDialog_EN.png');
		break;
	case 'jp':
		break;
	}
	return;
}

function setupLanguage(lang)
{
	setupLanguageDialog();
	setupImage(lang);
	$.ajax({
		type:         'get',
		url:          'lang/' + lang + '/about_audio_cache.json',
		contentType:  'application/JSON',
		dataType:     'JSON',
		scriptCharset:'utf-8',
		success:      function(data){
			loadLanguage(data);
			return;
		},
		error:        function(data){
			return;
		}
	});
	return;
}

function loadLanguage(data)
{
	var	i;
	var	LANG_KEY = [
		"TITLE",
		"TITLE_MSG",
		"MSG_0000"
	];
	for(i = 0; i < LANG_KEY.length; i++){
		$('#' + LANG_KEY[i]).html(data[LANG_KEY[i]]);
	}
	return;
}
