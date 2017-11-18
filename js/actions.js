
var major_data; 
d3.csv('../data/majors.csv', function(err, data){
    if(err) {
        console.log(err);
    }
    console.log(data);
    major_data = data 
})

d3.select('#btnMajor').on('click', function(){
    console.log('click');
    var chart = new tauCharts.Chart({
        
        data:major_data,
        type:'horizontal-bar',
        x:'Median annual Salary',
        y:'Career',
        color:'isWinner',
        size:null,
        plugins:
        [
        
        // tauCharts.api.plugins.get('tooltip')(),
        // tauCharts.api.plugins.get('legend')(),
        // tauCharts.api.plugins.get('quick-filter')(),
        // tauCharts.api.plugins.get('trendline')(),
        ]
        
        });
        
        chart.renderTo('#my');
});