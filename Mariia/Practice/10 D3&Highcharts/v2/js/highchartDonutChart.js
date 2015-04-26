/**
 * Created by Mariia_Obizna on 4/25/2015.
 */
$(function() {
    var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container3',
                type: 'pie'
            },

            plotOptions: {
                pie: {
                    borderColor: '#000000',
                    innerSize: '60%'
                }
            },
            series: [{
                data: [
                    ['Chrome', 44.2],
                    ['IE11', 26.6],
                    ['IE8', 20],
                    ['Firefox', 3.1],
                    ['Other', 5.4]
                ]}]
        },
        // using

        function(chart) { // on complete

            var xpos = '50%';
            var ypos = '53%';
            var circleradius = 102;
        });
});
