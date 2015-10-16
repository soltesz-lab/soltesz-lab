var nNOSNPYReelinRadCellsFCN = function() {	
	try {
	
	if (document.getElementById("nNOSNPYReelinRadCellsChart") && document.getElementById("nNOSNPYReelinRadCells").style.display!="hidden" && document.getElementById("nNOSNPYReelinRadCells").style.display!="none") {
	jQuery('#nNOSNPYReelinRadCellsChart').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: 'Reelin Ratio in SR nNOS+/NPY+ cells',
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
				['nNOS+/NPY+/reelin-<br/>(Ivy) cells (' + Math.round(window.nNOSNPYradiatum*(1-window.reelinFracnNOSNPY)/10)*10 + ')',   1-window.reelinFracnNOSNPY],
				['nNOS+/NPY+/reelin+<br/>(Neurogliaform) cells (' + Math.round(window.nNOSNPYradiatum*window.reelinFracnNOSNPY/10)*10 + ')',   window.reelinFracnNOSNPY],
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
	actininLMCellsFCN();
};
$(function () {	
nNOSNPYReelinRadCellsFCN();		
})(jQuery); 