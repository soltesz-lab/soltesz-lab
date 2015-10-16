var nNOSNPYOriCellsFCN = function() {	
	try {
	
	if (document.getElementById("nNOSNPYOriCellsChart") && document.getElementById("nNOSNPYOriCells").style.display!="hidden" && document.getElementById("nNOSNPYOriCells").style.display!="none") {
	jQuery('#nNOSNPYOriCellsChart').highcharts({
    chart: {
        renderTo:'container',
        type:'scatter'
    },
    title:{
        text:'nNOS+/NPY+ Cells in<br/>S. Oriens (SO)'
    },
    credits:{enabled:false},
    legend:{
			enabled: true,
			layout: 'vertical',
			align: 'center',
			width: 220,
			verticalAlign: 'bottom',
			borderWidth: 0,
			useHTML: true,
			labelFormatter: function() {
				return '<div style="width:200px"><span style="float:left">' + this.name + '</span><span style="float:right">' + this.options.label + '</span></div>';
			} //,
	},
    plotOptions: {
        series: {
            shadow:false,
            borderWidth:0,
            marker:{
                symbol:'circle'
            }                            
        }
    },
    xAxis:{
        min:0,
        max:100,
        lineWidth:0,
        gridLineWidth:0,
        title:{text:''},
        labels:{enabled:false}
    },
    yAxis:{
        min:0,
        max:100,
        lineWidth:0,
        gridLineWidth:0,
        title:{text:''},
        labels:{enabled:false}
    },  
	tooltip:{
		crosshairs: false,
			headerFormat: '<b>{series.name}</b>',
			pointFormat: '<br />{point.z} cells<br/>'
	},
    series: [	{
       color:'rgba(241,90,96,.5)',
       name:'nNOS+/NPY+ (Ivy) SO cells',
       label:Math.round(window.nNOSNPYoriens/10)*10,
       data: [{
           x:54,
           y:50,
		   z:Math.round(window.nNOSNPYoriens/10)*10,
           marker:{
               radius:Math.sqrt(Math.round(window.nNOSNPYoriens/10)*10/(Math.round(window.COUPcells*window.COUP_SO/10)*10+Math.round(window.nNOSNPYoriens/10)*10)*2000),
               fillColor:'rgba(241,90,96,.5)',
               lineColor:'rgba(241,90,96,.75)',
               lineWidth:1,
               states:{
                   hover:{
               radius:Math.sqrt(Math.round(window.nNOSNPYoriens/10)*10/(Math.round(window.COUPcells*window.COUP_SO/10)*10+Math.round(window.nNOSNPYoriens/10)*10)*2000),
                fillColor:'rgba(241,90,96,.5)',
               lineColor:'rgba(241,90,96,.75)',
               lineWidth:1
                  }
               }
           }
       }]
    },
	{
        color:'rgba(90,155,212,.5)',
        name:'COUP-TFII+ SO cells',
        label:Math.round(window.COUPcells*window.COUP_SO/10)*10,
        data: [{
           x:46,
            y:50,
			z:Math.round(window.COUPcells*window.COUP_SO/10)*10,
            marker:{
                radius:Math.sqrt(Math.round(window.COUPcells*window.COUP_SO/10)*10/(Math.round(window.COUPcells*window.COUP_SO/10)*10+Math.round(window.nNOSNPYoriens/10)*10)*2000),
                fillColor:'rgba(90,155,212,.5)',
                lineColor:'rgba(90,155,212,.75)',
                lineWidth:1,
                states:{
                    hover:{
                radius:Math.sqrt(Math.round(window.COUPcells*window.COUP_SO/10)*10/(Math.round(window.COUPcells*window.COUP_SO/10)*10+Math.round(window.nNOSNPYoriens/10)*10)*2000),
                 fillColor:'rgba(90,155,212,.5)',
                lineColor:'rgba(90,155,212,.75)',
                lineWidth:1
                   }
                }
            }
        }]
    },
	{
        color:'rgba(212,0,212,.5)',
        name:'COUP-TFII+/<br/>nNOS+/NPY+ SO cells',
        label:Math.round(window.COUPcells*window.COUP_SO*window.COUPTFIIoverlapnNOSNPY_SO/10)*10,
        data: [{
  		   label:'COUP-TFII+/<br/>nNOS+/NPY+ SO cells',
           x:44,
            y:50,
			z:Math.round(window.COUPcells*window.COUP_SO*window.COUPTFIIoverlapnNOSNPY_SO/10)*10,
                zIndex: 6,
            marker:{
                radius:35,
               fillColor:'rgba(212,0,212,0)',
                lineColor:'rgba(212,0,212,0)',
                lineWidth:0,
                states:{
                    hover:{
                        radius:35,
						   fillColor:'rgba(212,0,212,0)',
							lineColor:'rgba(212,0,212,0)',
							lineWidth:0
					}
                }
            }
        }]
    }]
   }, function(chart) {
        
        var point = chart.series[0].data[8];
        
        var textLeft = chart.renderer.text(
                window.COUPTFIIoverlapnNOSNPY_SO*100 + '%', 
				35 + chart.plotLeft,
				20 + chart.plotTop

            ).attr({
			fill:'rgba(90,155,212,1)',
                zIndex: 5
            }).css({fontSize: '14px', fontWeight: 'bold'})
			.add();
        
        var textRight = chart.renderer.text(
                window.nNOSNPYoverlapCOUPTFII_SO*100 + '%', 
				190 + chart.plotLeft,
				20 + chart.plotTop
            ).attr({
			fill:'rgba(241,90,96,1)',
                zIndex: 5
            }).css({fontSize: '14px', fontWeight: 'bold'})
			.add();
       
		});  
	}
	} catch(err) {
	txt = 'Error!\n';
	txt += err.name + ': ' + err.message + '\n';
	txt += err.fileName + ': ' + err.lineNumber;
	alert(txt)
	};
	nNOSNPYRadCellsFCN();
};
$(function () {	
nNOSNPYOriCellsFCN();		
})(jQuery); 