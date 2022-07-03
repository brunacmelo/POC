Highcharts.chart('stacked2021', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Postividade das músicas mais ouvidas em 2021'
    },
    xAxis: {
      categories: ['Liberdade Provisória - Henrique e Juliano', 'A gente fez amor - Gusttavo Lima', 'Graveto - Marília Mendonça', 'Volta por baixo - Henrique e Juliano', 'S de Saudade - Luíza & Maurílio, Zé Neto & Cristiano'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Nível de positividade'
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
      name: 'Positive',
      color: 'green',
      data: [0.023, 0.029, 0.015, 0.0, 0.0]
    }, {
      name: 'Neutro',
      color: 'grey',
      data: [0.977, 0.823, 0.968, 0.907, 1]
    }, {
      name: 'Negativo',
      color: 'red',
      data: [0.0, 0.148, 0.017, 0.093, 0.0]
    }]
  });