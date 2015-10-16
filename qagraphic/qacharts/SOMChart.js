var SOMFCN = function() {	
	try {
	var myKey = "SOMFact";
	if (document.getElementById(myKey + "Input")) {
		document.getElementById(myKey).dataset.custom = document.getElementById(myKey + "Input").value;
	}
	//window.SOMFrac = parseFloat(((document.getElementById(myKey).dataset.custom)/100).toFixed(2)); 
	window.SOMFrac = .12; 
	window.somfam = window.inrnNum*SOMFrac;

	if (document.getElementById("SOMChart") && document.getElementById("SOM").style.display!="hidden" && document.getElementById("SOM").style.display!="none") {
	jQuery('#SOMChart').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: 'SOM+ Cells',
			align: 'center'
	   },
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
		},
		credits:{enabled: false},
	   plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: true
			}
		},
		legend: {
			enabled: true,
			layout: 'vertical',
			align: 'center',
			width: 220,
			verticalAlign: 'bottom',
			borderWidth: 0,
			useHTML: true,
			labelFormatter: function() {
				return '<div style="width:200px"><span style="float:left">' + this.name + '</span><span style="float:right">' + this.y*100 + '%</span></div>';
			} //,
			//title: {
			//	text: 'Primary',
			//	style: {
			//		fontWeight: 'bold'
			//	}
			//}		
		},
		series: [{
			type: 'pie',
			name: 'Fraction',
			data: [
				['SOM+ cells (' + window.somfam + ')',   window.SOMFrac],
				['Other Interneurons (' + (inrnNum-window.somfam) + ')',   1-window.SOMFrac],
			]
		}]	
		});  
	}
	} catch(err) {
	txt = 'Error!\n';
	txt += err.name + ': ' + err.message + '\n';
	txt += err.fileName + ': ' + err.lineNumber;
	alert(txt)
	};
	SOMLaminarFCN();
};
$(function () {	
SOMFCN();		
})(jQuery);  
