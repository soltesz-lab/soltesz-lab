var InrnFractionFCN = function() {	
	try {

	if (document.getElementById("InrnFractionChart") && document.getElementById("InrnFraction").style.display!="hidden" && document.getElementById("InrnFraction").style.display!="none") {
	jQuery('#InrnFractionChart').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: 'Neuron Ratio',
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
					/*formatter: function() {
					return point.percentage.toFixed(2) + ' %';
            }*/
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
				['Principal cells (' + document.getElementById("NeuronNumFact").dataset.custom*(1-window.inrnFrac) + ')',   1-window.inrnFrac],
				['Interneurons (' + window.inrnNum + ')',   window.inrnFrac],
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
	COUPTFIIFCN();
	SOMFCN();
};
$(function () {	
InrnFractionFCN();		
})(jQuery);  
