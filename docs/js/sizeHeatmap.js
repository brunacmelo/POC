function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

Highcharts.chart('sizeHeatmap', {

    chart: {
        type: 'heatmap',
        marginTop: 10,
        width: 1000,
        height: 350,
        backgroundColor: 'transparent'

    },
    title: {
        text: null
    },

    xAxis: {
        categories: ['Cluster 1', 'Cluster 2', 'Cluster 3']
    },

    yAxis: {
        categories: ['Longo', 'Médio', 'Curto'],
        title: null
    },

    colorAxis: {
        min: 0,
        max: 1,
        minColor: '#FFF7F4',
        maxColor: "#dd6326"
    },
            
    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 200
    },

    tooltip: {
        formatter: function () {
            return '<b>' + getPointCategoryName(this.point, 'x') + '</b> <br> Grau de pertencimento médio: <b>' +
                this.point.value + '</b> <br> Tamanho do livro: <b>' + getPointCategoryName(this.point, 'y') + '</b>';
        }
    },

    series: [{
        name: 'Grau de pertencimento médio',
        data: [[0, 0, 0.14], [0, 1, 0.26], [0, 2, 0.3], [1, 0, 0.58], [1, 1, 0.41], [1, 2, 0.38], [2, 0, 0.28], [2, 1, 0.33], [2, 2, 0.32]],
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