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
		url:          'lang/' + lang + '/index.json',
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
		"OTHER_FUNCTION",
		"USE_CLIENT_APP",
		"USE_CLIENT_APP_MSG0",
		"USE_CLIENT_APP_MSG1",
		"USE_CLIENT_APP_MSG2",
		"USE_CLIENT_APP_MSG3",
		"USE_SERVER_PUSH",
		"USE_SERVER_PUSH_MSG0",
		"USE_SERVER_PUSH_MSG1",
		"USE_SERVER_PUSH_MSG2"
	];
	for(i = 0; i < LANG_KEY.length; i++){
		$('#' + LANG_KEY[i]).html(data[LANG_KEY[i]]);
	}
	return;
}
