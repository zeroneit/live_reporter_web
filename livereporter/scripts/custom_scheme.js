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
		url:          'lang/' + lang + '/custom_scheme.json',
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
		"SUPPORT_MSG",
		"MSG_0",
		"LL_FREE0",
		"LL_FREE1",
		"LL_FREE2",
		"LL_PLUS0",
		"LL_PLUS1",
		"LL_PLUS2",
		"CREATE_CUSTOM_URL",
		"APP_TYPE",
		"IP_OR_HOST_LBL",
		"PORT_NUMBER_LBL",
		"ERROR_IN_PORT",
		"STREAM_NAME_LBL",
		"USER_NAME_LBL",
		"PASSWORD_LBL",
		"CREATE_BUTTON"
	];
	var	LANG_KEY_CLASS = [
		"MAINVIEW_RETURN",
		"CAUTION_MSG"
	];
	for(i = 0; i < LANG_KEY.length; i++){
		$('#' + LANG_KEY[i]).html(data[LANG_KEY[i]]);
	}
	for(i = 0; i < LANG_KEY_CLASS.length; i++){
		$('.' + LANG_KEY_CLASS[i]).html(data[LANG_KEY_CLASS[i]]);
	}
	return;
}

function CreateCustomURL()
{
	var	port;
	var	custom_url;
	var	scheme;
	var	app_name;
	port	= parseInt($('#port_number').val(), 10);
	if(isNaN(port)){
		alert($('#ERROR_IN_PORT').html());
		return;
	}
	if(port <= 0){
		alert($('#ERROR_IN_PORT').html());
		return;
	}
	scheme = 'kzkysdjpn.lr://';
	app_name = parseInt($('#app_name').val(), 10);
	switch(app_name){
	case 0:
	default:
		break;
	case 1:
		scheme = 'kzkysdjpn.lrp://';
		break;
	}
	custom_url = scheme + setupUserInfo();
	custom_url += $('#host_name').val() + ':' + port;
	custom_url += '/' + $('#application_name').val();
	$('#custom_scheme_url').html(custom_url);
	$('#custom_url_link').attr("href", custom_url);
	return;
}

function setupUserInfo()
{
	var	user;
	var	pass;
	user = $('#user_name').val();
	pass = $('#password').val();
	if((user.length == 0) ||
		(pass.length == 0)){
		return '';
	}
	return user + ':' + pass + '@';
}
