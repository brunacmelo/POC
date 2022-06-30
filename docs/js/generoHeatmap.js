function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

Highcharts.getJSON(
    "https://api.npoint.io/fa9e855585c41c0eee6e",

    function (data) {

        Highcharts.chart('generoHeatmap', {

            chart: {
                type: 'heatmap',
                marginTop: 10,
                marginBottom: 20,
                width: 1000,
                height: 800,
                backgroundColor: 'transparent'

            },
            title: {
                text: null
            },

            xAxis: {
                categories: ['Cluster 1', 'Cluster 2', 'Cluster 3']
            },

            yAxis: {
                categories: ['Academic', 'Anthropology', 'Biography', 'Childrens', 'Classics',
                'Contemporary', 'Cultural', 'Design', 'Drama', 'Epic', 'Fantasy',
                'Historical', 'History', 'Humor', 'Literary-Fiction', 'Literature',
                'Philosophy', 'Plays', 'Politics', 'Reference', 'Religion', 'Romance',
                'Sci-Fi', 'Science', 'Self-Help', 'Short-Stories', 'Sociology',
                'Travel', 'Young-Adult'],
                title: null,
                reversed: true
            },

            colorAxis: {
                min: 0,
                max: 1,
                minColor: '#F4F9F7',
                maxColor: "#437a67"
            },

            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 720
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + getPointCategoryName(this.point, 'x') + '</b> <br> Grau de pertencimento médio: <b>' +
                        this.point.value + '</b> <br> Gênero literário: <b>' + getPointCategoryName(this.point, 'y') + '</b>';
                }
            },

            series: [{
                name: 'Grau de pertencimento médio',
                data: data,
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    formatter: function () {
                        return this.point.value.toFixed(2) ;
                    }
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        yAxis: {
                            labels: {
                                formatter: function () {
                                    return this.value.charAt(0);
                                }
                            }
                        }
                    }
                }]
            },
            exporting: {
                enabled: true
            },
            credits: {
                enabled: false
            }

        });
    }
);