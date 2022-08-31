Highcharts.chart('stacked2019', {
    chart: {
      type: 'column'
    },
    title: {
      text: '2019'
    },
    xAxis: {
      categories: ['Lençol Dobrado - João Gustavo e Murilo', 'Bebi Liguei - Marília Mendonça', 'Atrasadinha - Felipe Araújo', 'Cobaia - Luana Prado', 'Notificação Preferida - Zé Neto & Cristiano'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Level of positivity'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent'
      }
    },
    series: [{
      name: 'Positivo',
      color: '#6AAF5F',
      data: [0.0, 0.043, 0.01, 0.007, 0.0]
    }, {
      name: 'Neutro',
      color: 'grey',
      data: [1, 1, 0.957, 0.99, 0.962]
    }, {
      name: 'Negativo',
      color: '#DA422B',
      data: [0.0, 0.0, 0.0, 0.053, 0.038]
    }]
  });