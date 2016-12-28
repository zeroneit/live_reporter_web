$(document).ready(function(){
	onLoadInitPage();
	return;
});

function onLoadInitPage()
{
	$.ajax({
		type:          'get',
		url:           'templature.json',
		scriptCharset: 'utf-8',
		success: function(data){
			onLoadChartData(data);
			return;
		},
		error: function(data){
			alert("AJAX error");
			return;
		}
	});
	return;
}

function onLoadChartData(data)
{
	var	dateDataArray;
	var	i;
	var	date;
	var	year;
	var	month;
	var	day;
	var	hours;
	var	minutes;
	var	seconds;
	var	formattedTime;

	var	newData;

	dateDataArray = new Array(data["DATE"].length + 1);
	dateDataArray[0]	= 'x';
	for(i = 0; i < data["DATE"].length ; i++){
		date	= new Date(data["DATE"][i] * 1000);

		year	= date.getFullYear();

		month	= date.getMonth() + 1;
		month	= "0" + month;

		day	= date.getDate();
		day	= "0" + day;

		hours	= "0" + date.getHours();
		minutes	= "0" + date.getMinutes();
		seconds	= "0" + date.getSeconds();

		formattedTime	= year + "/" + month.substr(-2) + "/" + day.substr(-2) + " " +
			hours.substr(-2)  + ":" + minutes.substr(-2) + ':' + seconds.substr(-2);
		dateDataArray[i + 1]	= formattedTime;
	}
	newData	= data["TEMPLATURE"];
	newData["CPU0"].unshift('CPU0');
	newData["CPU1"].unshift('CPU1');
	data["DATE"].unshift('x');
	drawChartGraph(dateDataArray, newData);
	return;
}

function drawChartGraph(dateData, data)
{
	var	chart;
	chart	= c3.generate({
		bindto  : '#chart',
		data    : {
			x        : 'x',
			xFormat  : '%Y/%m/%d %H:%M:%S',
			columns  : [
				dateData,
				data["CPU0"],
				data["CPU1"]
			],
			type     : 'line'
		},
		axis    : {
			x        : {
				type    : 'timeseries',
				tick    : {
					format        : '%Y/%m/%d %H:%M:%S',
					rotate        : 45,
					height        : 120
				}
			}
		}
	});
	return;
}
