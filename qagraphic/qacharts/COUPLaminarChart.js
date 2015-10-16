var COUPLaminarFCN = function() {	
	try {
	if (document.getElementById("COUPLaminarChart") && document.getElementById("COUPLaminar").style.display!="hidden" && document.getElementById("COUPLaminar").style.display!="none") {
	jQuery('#COUPLaminarChart').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type:'column'
		},
		title: {
			text: 'Laminar Distribution of COUP-TFII+ Cells',
			align: 'center',
	   },
			//subtitle: {text:'woo'},
		tooltip: {
			headerFormat:'',
			pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
		},
		credits:{enabled: false},
	   plotOptions: {
            column: {
                stacking: 'normal',
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false,
					formatter: function() {
					return point.percentage.toFixed(2) + ' %';
            }
				},
				showInLegend: true
			}
		},
            yAxis: {
			min:0,
			max:1,
            labels: {
                enabled: true,
				formatter: function() {
					return Math.round(this.value*100) + '%';
				}
			},
            title: {
                text: null
            }
			},
			xAxis: {
			 labels:
			{
			  enabled: false
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
				return '<div style="width:200px"><span style="float:left">' + this.name + '</span><span style="float:right">(' + Math.round(this.options.data*100) + '%) ' + Math.round(this.options.data*window.COUPcells/10)*10 + ' cells</span></div>';
			} //,
			//title: {
			//	text: 'Primary',
			//	style: {
			//		fontWeight: 'bold'
			//	}
			//}		
		},
		series: [{
			name: 'S. Lac.-Mol.',
			data: [window.COUP_SLM]
		}, {
			name: 'S. Radiatum',
			data: [window.COUP_SR]
		}, {
			name: 'S. Pyramidale',
			data: [window.COUP_SP]
		}, {
			name: 'S. Oriens',
			data: [window.COUP_SO]
		}]	
		});  
	}
	} catch(err) {
	txt = 'Error!\n';
	txt += err.name + ': ' + err.message + '\n';
	txt += err.fileName + ': ' + err.lineNumber;
	alert(txt)
	};
	nNOSNPYPyrCellsFCN();
};
$(function () {	
COUPLaminarFCN();		
})(jQuery);  
