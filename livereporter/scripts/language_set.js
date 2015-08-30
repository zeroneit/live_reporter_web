function setBaseLanguage(setupLanguage)
{
	var	lang;
	lang = getQueryString('LANG', 'en');
	switch(lang){
	case 'en':
	case 'jp':
		break;
	default:
		lang = 'en';
		break;
	}
	setupLanguage(lang);
	return;
}

function getQueryString(key, default_)  
{  
	if(default_==null){
		default_="";
	}
	key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");

	var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
	var qs = regex.exec(window.location.href);

	if(qs == null){
		return default_;
	}
	return qs[1];
}

function setupLanguageDialog()
{
	$('#dialog').dialog({
		autoOpen:false,
		closeOnexcape:false,
		width: 240,
		modal:true,
		buttons:{
			"OK":function(){
				changeLanguage();
				return;
			},
			"Cancel":function(){
				$(this).dialog('close');
				return;
			}
		}
	});
	return;
}

function openLanguageDialog()
{
	$('#dialog').dialog('open');
	return;
}

function changeLanguage()
{
	var	langType;
	var	lang;
	var	fileName;
	langType = parseInt($('#language').val(), 10);
	lang = 'en';
	switch(langType){
	case 0:
	default:
		break;
	case 1:
		lang	= 'jp';
		break;
	}
	fileName = GetFileName(window.location.href);
	if(fileName.length <= 1){
		window.location.href	= 'index.html?LANG=' + lang;
		return;
	}
	window.location.href	= fileName + '.html?LANG=' + lang;
	return;
}

function GetFileName(file_url)
{
	file_url = file_url.substring(file_url.lastIndexOf('/')+1,file_url.length);
	file_url = file_url.substring(0,file_url.indexOf('.'));
	return file_url;
}
