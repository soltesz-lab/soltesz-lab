var SOMLaminarFCN = function() {	
	try {
	var myKey = "SOMLayerFact";
	if (document.getElementById(myKey + "Input")) {
		document.getElementById(myKey).dataset.custom = document.getElementById(myKey + "Input").value;
	}
	//alert ("inrnFrac: " + inrnFrac)
	window.som_SO = Math.round(window.somfam*.89/10)*10;
	if (document.getElementById("SOMLaminarChart") && document.getElementById("SOMLaminar").style.display!="hidden" && document.getElementById("SOMLaminar").style.display!="none") {
	jQuery('#SOMLaminarChart').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type:'column'
		},
		title: {
			text: 'Laminar Distribution of SOM+ Cells',
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
				return '<div style="width:200px"><span style="float:left">' + this.name + '</span><span style="float:right">(' + Math.round(this.options.data*100) + '%) ' + Math.round(this.options.data*window.somfam/10)*10 + ' cells</span></div>';
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
			data: [0]
		}, {
			name: 'S. Radiatum',
			data: [0.031]
		}, {
			name: 'S. Pyramidale',
			data: [0.079]
		}, {
			name: 'S. Oriens',
			data: [.89]
		}]	
		});  
	}
	} catch(err) {
	txt = 'Error!\n';
	txt += err.name + ': ' + err.message + '\n';
	txt += err.fileName + ': ' + err.lineNumber;
	alert(txt)
	};
	//nNOSNPYPyrCellsFCN();
};
$(function () {	
SOMLaminarFCN();		
})(jQuery);  
