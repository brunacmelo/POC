Highcharts.chart('stacked2021', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Postividade das músicas mais ouvidas em 2021'
    },
    xAxis: {
      categories: ['Batom de Cereja - Israel & Rodolfo', 'Facas - Diego & Victor, Bruno & Marrone', 'Ele é Ele, Eu Sou Eu - Wesley Safadão', 'Meu Pedaço de Pecado - João Gomes', 'Baby Me Atende - Matheus Fernandes'],
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
      name: 'Positivo',
      color: '#6AAF5F',
      data: [0.03, 0.0, 0.023, 0.049, 0.0]
    }, {
      name: 'Neutro',
      color: 'grey',
      data: [0.97, 1, 0.958, 0.942, 1]
    }, {
      name: 'Negativo',
      color: '#DA422B',
      data: [0.0, 0.0, 0.019, 0.009, 0.0]
    }]
  });