var OLMFCN = function() {	
	try {
	var myKey = "OLMFact";
	if (document.getElementById(myKey + "Input")) {
		document.getElementById(myKey).dataset.custom = document.getElementById(myKey + "Input").value;
	}
	//window.SOMFrac = parseFloat(((document.getElementById(myKey).dataset.custom)/100).toFixed(2)); 
	window.OLMFrac = .40; 
	window.olm_SO = Math.round(window.som_SO*OLMFrac/10)*10;

	if (document.getElementById("OLMChart") && document.getElementById("OLM").style.display!="hidden" && document.getElementById("OLM").style.display!="none") {
	jQuery('#OLMChart').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: 'OLM Cells',
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
				['Other SOM+ cells (' + (window.som_SO-window.olm_SO) + ')',   1-window.OLMFrac],
				['OLM cells (' + (window.olm_SO) + ')',   window.OLMFrac],
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
	//SOMLaminarFCN();
};
$(function () {	
OLMFCN();		
})(jQuery);  
