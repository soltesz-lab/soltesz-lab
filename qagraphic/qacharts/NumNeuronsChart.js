var NumNeuronsFCN = function() {	
	try {
		var myKey = "NeuronNumFact";
		if (document.getElementById(myKey + "Input")) {
			document.getElementById(myKey).dataset.custom = document.getElementById(myKey + "Input").value;	
		}
	if (document.getElementById("NumNeuronsChart") && document.getElementById("NumNeurons").style.display!="hidden" && document.getElementById("NumNeurons").style.display!="none") {
		jQuery('#NumNeuronsChart').highcharts({ 
		chart: {
			renderTo:'container',
			type:'column'
		},
		title: {
			text: 'Number of Neurons',
			align: 'center'
	   },
		xAxis: {
			 labels:
			{
			  enabled: false
			},
               title: {
                    text: 'Subfield'
                }
			/*categories: [
				'Hippocampus',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec'
			]*/
		},
		
		series: [{
			name: 'CA1',
			data: [parseInt(document.getElementById(myKey).dataset.custom)]

		}, {
			name: 'CA3',
			data: [230000],
			color:'rgba(100,100,100,1)',

		}],
		yAxis: {
			min: 0,
			title: {
				text: 'Number of neurons'
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
				return '<div style="width:200px"><span style="float:left">' + this.name + ' neurons</span><span style="float:right">' + this.options.data + '</span></div>';
			} //,
			//title: {
			//	text: 'Primary',
			//	style: {
			//		fontWeight: 'bold'
			//	}
			//}		
		},
		tooltip: {
		headerFormat:'',
			pointFormat: '{series.name}: <b>{series.options.data} neurons</b>'
		},

		
		credits:{enabled: false}
		});  
	}
	} catch(err) {
	txt = 'Error!\n';
	txt += err.name + ': ' + err.message + '\n';
	txt += err.fileName + ': ' + err.lineNumber;
	alert(txt)
	};
	//InrnFractionFCN();
};
$(function () {	
NumNeuronsFCN();		
})(jQuery);  
