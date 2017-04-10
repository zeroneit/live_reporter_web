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
		url:          'lang/' + lang + '/mobile_model_list.json',
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
		"PRODUCT",
		"RETURN_MESSAGE",
		"MODEL_NAME",
		"CPU_VENDOR",
		"CPU_MODEL_NAME",
		"OPERATION_RESULT",
		"NOTE"
	];
	for(i = 0; i < LANG_KEY.length; i++){
		$('#' + LANG_KEY[i]).html(data[LANG_KEY[i]]);
	}

	$.ajax({
		type:         'get',
		url:          'mobile_model_check_list.json',
		contentType:  'application/JSON',
		dataType:     'JSON',
		scriptCharset:'utf-8',
		success:      function(data){
			onLoadMobileModelList(data);
			return;
		},
		error:        function(data){
			return;
		}
	});
	return;
}

function onLoadMobileModelList(data)
{
	var	i;
	for(i = 0; i < data['MOBILE_MODEL_LIST'].length ;i++){
		onLoadMobileModelRecord(data['MOBILE_MODEL_LIST'][i]);
	}
	return;
}

function onLoadMobileModelRecord(record)
{
	$('#MOBILE_MODEL_LIST').append('<tr><td >' +
		record['PRODUCT'] + '</td><td>' +
		record['MODEL_NAME'] + '</td><td>' +
		record['CPU_VENDOR'] + '</td><td>' +
		record['CPU_MODEL_NAME'] + '</td><td>' +
		onLoadOperationResult(record['OPERATION_RESULT']) + '</td><td>' +
		record['NOTE'] +
		'</td></tr>');
	return;
}

function onLoadOperationResult(result)
{
	if(result == false){
		return 'NG';
	}
	return 'OK';
}
