$(document).ready(function(){
	setBaseLanguage(setupIndex);
	return;
});

function setupIndex(lang)
{
	setupLanguage(lang);
	return;
}

function setupLanguage(lang)
{
	setupLanguageDialog();
	$.ajax({
		type:         'get',
		url:          'lang/' + lang + '/settings.json',
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
	var	LANG_KEY_ID = [
		"TITLE",
		"MSG_0",
		"MSG_1"
	];
	var	LANG_KEY_CLASS = [
		"VIDEO_SETTINGS",
		"AUDIO_SETTINGS",
		"NETWORK_SETTINGS",
		"PRESET_LIST",
		"SUPERIMPOSE",
		"MAINVIEW_RETURN"
	];
	for(i = 0; i < LANG_KEY_ID.length; i++){
		$('#' + LANG_KEY_ID[i]).html(data[LANG_KEY_ID[i]]);
	}
	for(i = 0; i < LANG_KEY_CLASS.length; i++){
		$('.' + LANG_KEY_CLASS[i]).html(data[LANG_KEY_CLASS[i]]);
	}
	return;
}
