var ResultsFCN = function() {	
	try {
		var getColor = {
			'Neurogliaform': '#00008A',
			'Ivy': '#3D3DFF',
			'O-LM': '#4D004D',
			'Double proj.': '#B000B0',
			'CB- septal proj.': '#9E43C4',
			'Oriens-retrohipp.': '#FF2EFF',
			'Other SOM+': '#E39AE3',
			'PV+ basket': '#FF0000',
			'Bistratified': '#FF4040',
			'Axo-axonic': '#FF8080',
			'CCK+ basket': '#007300',
			'ADI': '#00A300',
			'SCA': '#00D400',
			'PPA': '#78DE78',
			'CCK+ misc.': '#9EFF9E',
			'IS I': '#914100',
			'IS II': '#FF7300',
			'IS III': '#FFA257',
			'Other': '#878787'
		};
		

	if (document.getElementById("ResultsChart") && document.getElementById("ResultsChart").style.display!="hidden" && document.getElementById("ResultsChart").style.display!="none") {
	jQuery('#ResultsChart').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false,
			spacingLeft: 0
		},
		title: {
			text: '',
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
			spacingLeft: 0,
			//layout: 'vertical',
			align: 'center',
			width: 500,
			itemWidth:190,
			itemStyle: {
				fontSize:'8pt',
				width: 170 /*,
				display: 'flex',
				flex-direction: 'column',
				flex-wrap: 'wrap'*/
			},
			verticalAlign: 'bottom',
			borderWidth: 0 ,
			useHTML: true,
			labelFormatter: function() {
				return '<div style="width:150px;height=25px;display:block"><span style="float:left">' + this.name + '</span><span style="float:right">' + Math.round(this.y*100) + '%</span></div>';
			}
				//,
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
				{name: 'Neurogliaform (' + window.ngf + ')',   y: window.ngf/(window.total2use), color: getColor['Neurogliaform']},
				{name: 'Ivy (' + window.ivy + ')',   y: window.ivy/(window.total2use), color: getColor['Ivy']},
				{name: 'O-LM (' + window.olm + ')',   y: window.olm/(window.total2use), color: getColor['O-LM']},
				{name: 'Double proj. (' + window.dbl + ')',   y: window.dbl/(window.total2use), color: getColor['Double proj.']},
				{name: 'CB- septal proj. (' + window.sep + ')',   y: window.sep/(window.total2use), color: getColor['CB- septal proj.']},
				{name: 'Oriens-retrohipp. (' + window.ret + ')',   y: window.ret/(window.total2use), color: getColor['Oriens-retrohipp.']},
				{name: 'Other SOM+ (' + window.oth + ')',   y: window.oth/(window.total2use), color: getColor['Other SOM+']},
				{name: 'PV+ basket (' + window.pvb + ')',   y: window.pvb/(window.total2use), color: getColor['PV+ basket']},
				{name: 'Bistratified (' + window.bis + ')',   y: window.bis/(window.total2use), color: getColor['Bistratified']},
				{name: 'Axo-axonic (' + window.axo + ')',   y: window.axo/(window.total2use), color: getColor['Axo-axonic']},
				{name: 'CCK+ basket (' + window.cck + ')',   y: window.cck/(window.total2use), color: getColor['CCK+ basket']},
				{name: 'ADI (' + window.adi + ')',   y: window.adi/(window.total2use), color: getColor['ADI']},
				{name: 'SCA (' + window.sca + ')',   y: window.sca/(window.total2use), color: getColor['SCA']},
				{name: 'PPA (' + window.ppa + ')',   y: window.ppa/(window.total2use), color: getColor['PPA']},
				{name: 'CCK+ misc. (' + window.cmi + ')',   y: window.cmi/(window.total2use), color: getColor['CCK+ misc.']},
				{name: 'IS I (' + window.is1 + ')',   y: window.is1/(window.total2use), color: getColor['IS I']},
				{name: 'IS II (' + window.is2 + ')',   y: window.is2/(window.total2use), color: getColor['IS II']},
				{name: 'IS III (' + window.is3 + ')',   y: window.is3/(window.total2use), color: getColor['IS III']},
				{name: 'Other (' + window.otherfam + ')',   y: window.otherfam/(window.total2use), color: getColor['Other']}
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
};
/*$(function () {	
ResultsFCN();		
})(jQuery);  */
