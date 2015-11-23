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
		url:          'lang/' + lang + '/wowza.json',
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
		"MSG_0",
		"MSG_1",
		"MSG_2",
		"MSG_3",
		"MSG_4",
		"MSG_5",
		"MSG_6",
		"MSG_7",
		"MSG_8"
	];
	var	LANG_KEY_CLASS = [
		"MAIN_RETURN"
	];
	for(i = 0; i < LANG_KEY.length; i++){
		$('#' + LANG_KEY[i]).html(data[LANG_KEY[i]]);
	}
	for(i = 0; i < LANG_KEY_CLASS.length; i++){
		$('.' + LANG_KEY_CLASS[i]).html(data[LANG_KEY_CLASS[i]]);
	}
	return;
}
