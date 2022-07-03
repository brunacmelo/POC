const data = [
        ['2019-01-03T00:00:00.000000',0.1582380000000000000],
        ['2019-01-10T00:00:00.000000',0.183386],
        ['2019-01-17T00:00:00.000000',0.184614],
        ['2019-01-24T00:00:00.000000',0.1881695],
        ['2019-01-31T00:00:00.000000',0.17085899999999998],
        ['2019-02-07T00:00:00.000000',0.163138],
        ['2019-02-14T00:00:00.000000',0.16165849999999998],
        ['2019-02-21T00:00:00.000000',0.18106950000000002],
        ['2019-02-28T00:00:00.000000',0.133811],
        ['2019-03-07T00:00:00.000000',0.0976975],
        ['2019-03-14T00:00:00.000000',0.14697100000000002],
        ['2019-03-21T00:00:00.000000',0.1560045],
        ['2019-03-28T00:00:00.000000',0.17658250000000003],
        ['2019-04-04T00:00:00.000000',0.1652805],
        ['2019-04-11T00:00:00.000000',0.14893600000000004],
        ['2019-04-18T00:00:00.000000',0.17353900000000003],
        ['2019-04-25T00:00:00.000000',0.18562450000000003],
        ['2019-05-02T00:00:00.000000',0.1708695],
        ['2019-05-09T00:00:00.000000',0.129808],
        ['2019-05-16T00:00:00.000000',0.13219],
        ['2019-05-23T00:00:00.000000',0.12467500000000001],
        ['2019-05-30T00:00:00.000000',0.152529],
        ['2019-06-06T00:00:00.000000',0.149334],
        ['2019-06-13T00:00:00.000000',0.15824950000000002],
        ['2019-06-20T00:00:00.000000',0.155105],
        ['2019-06-27T00:00:00.000000',0.18009699999999998],
        ['2019-07-04T00:00:00.000000',0.1793795],
        ['2019-07-11T00:00:00.000000',0.193598],
        ['2019-07-18T00:00:00.000000',0.195383],
        ['2019-07-25T00:00:00.000000',0.199839],
        ['2019-08-01T00:00:00.000000',0.18921799999999997],
        ['2019-08-08T00:00:00.000000',0.16289749999999997],
        ['2019-08-15T00:00:00.000000',0.1462525],
        ['2019-08-22T00:00:00.000000',0.1811055],
        ['2019-08-29T00:00:00.000000',0.201252],
        ['2019-09-05T00:00:00.000000',0.17084049999999998],
        ['2019-09-12T00:00:00.000000',0.1328825],
        ['2019-09-19T00:00:00.000000',0.132352],
        ['2019-09-26T00:00:00.000000',0.1314925],
        ['2019-10-03T00:00:00.000000',0.13871050000000001],
        ['2019-10-10T00:00:00.000000',0.15473900000000002],
        ['2019-10-17T00:00:00.000000',0.1720295],
        ['2019-10-24T00:00:00.000000',0.17113399999999998],
        ['2019-10-31T00:00:00.000000',0.173274],
        ['2019-11-07T00:00:00.000000',0.15014399999999997],
        ['2019-11-14T00:00:00.000000',0.17454150000000002],
        ['2019-11-21T00:00:00.000000',0.17177999999999996],
        ['2019-11-28T00:00:00.000000',0.183316],
        ['2019-12-05T00:00:00.000000',0.180619],
        ['2019-12-12T00:00:00.000000',0.169011],
        ['2019-12-19T00:00:00.000000',0.1823285],
        ['2019-12-26T00:00:00.000000',0.146054],
        ['2020-01-02T00:00:00.000000',0.134474],
        ['2020-01-09T00:00:00.000000',0.15106999999999998],
        ['2020-01-16T00:00:00.000000',0.1755355],
        ['2020-01-23T00:00:00.000000',0.14670450000000002],
        ['2020-01-30T00:00:00.000000',0.1160605],
        ['2020-02-06T00:00:00.000000',0.1000655],
        ['2020-02-13T00:00:00.000000',0.109787],
        ['2020-02-20T00:00:00.000000',0.1021295],
        ['2020-02-27T00:00:00.000000',0.0985875],
        ['2020-03-05T00:00:00.000000',0.09350349999999999],
        ['2020-03-12T00:00:00.000000',0.1172825],
        ['2020-03-19T00:00:00.000000',0.13701750000000001],
        ['2020-03-26T00:00:00.000000',0.127436],
        ['2020-04-02T00:00:00.000000',0.17258050000000005],
        ['2020-04-09T00:00:00.000000',0.16999000000000003],
        ['2020-04-16T00:00:00.000000',0.13636600000000001],
        ['2020-04-23T00:00:00.000000',0.14287750000000002],
        ['2020-04-30T00:00:00.000000',0.1485785],
        ['2020-05-07T00:00:00.000000',0.1804475],
        ['2020-05-14T00:00:00.000000',0.16831699999999997],
        ['2020-05-21T00:00:00.000000',0.14925477386934674],
        ['2020-05-28T00:00:00.000000',0.16136733668341707],
        ['2020-06-04T00:00:00.000000',0.12325628140703516],
        ['2020-06-11T00:00:00.000000',0.1185125],
        ['2020-06-18T00:00:00.000000',0.1222015],
        ['2020-06-25T00:00:00.000000',0.1356125],
        ['2020-07-02T00:00:00.000000',0.10333500000000001],
        ['2020-07-09T00:00:00.000000',0.08052799999999999],
        ['2020-07-16T00:00:00.000000',0.11435950000000002],
        ['2020-07-23T00:00:00.000000',0.0835425],
        ['2020-07-30T00:00:00.000000',0.11057750000000001],
        ['2020-08-06T00:00:00.000000',0.11554799999999998],
        ['2020-08-13T00:00:00.000000',0.11478450000000001],
        ['2020-08-20T00:00:00.000000',0.11426650000000001],
        ['2020-08-27T00:00:00.000000',0.1161735],
        ['2020-09-03T00:00:00.000000',0.11901100000000002],
        ['2020-09-10T00:00:00.000000',0.0889105],
        ['2020-09-17T00:00:00.000000',0.12007800000000002],
        ['2020-09-24T00:00:00.000000',0.155858],
        ['2020-10-01T00:00:00.000000',0.15355200000000002],
        ['2020-10-08T00:00:00.000000',0.1482255],
        ['2020-10-15T00:00:00.000000',0.137759],
        ['2020-10-22T00:00:00.000000',0.14969599999999997],
        ['2020-10-29T00:00:00.000000',0.1540205],
        ['2020-11-05T00:00:00.000000',0.16785049999999999],
        ['2020-11-12T00:00:00.000000',0.15130000000000002],
        ['2020-11-19T00:00:00.000000',0.1272865],
        ['2020-11-26T00:00:00.000000',0.1406605],
        ['2020-12-03T00:00:00.000000',0.1145425],
        ['2020-12-10T00:00:00.000000',0.11065350000000002],
        ['2020-12-17T00:00:00.000000',0.08908200000000002],
        ['2020-12-24T00:00:00.000000',0.058352261306532684],
        ['2020-12-31T00:00:00.000000',0.016081407035175892],
        ['2021-01-07T00:00:00.000000',0.04619748743718594],
        ['2021-01-14T00:00:00.000000',0.09774924623115577],
        ['2021-01-21T00:00:00.000000',0.07424120603015076],
        ['2021-01-28T00:00:00.000000',0.1098625],
        ['2021-02-04T00:00:00.000000',0.07414199999999999],
        ['2021-02-11T00:00:00.000000',0.09497100000000001],
        ['2021-02-18T00:00:00.000000',0.12191849999999999],
        ['2021-02-25T00:00:00.000000',0.11656850000000002],
        ['2021-03-04T00:00:00.000000',0.1520185],
        ['2021-03-11T00:00:00.000000',0.15343600000000002],
        ['2021-03-18T00:00:00.000000',0.1403985],
        ['2021-03-25T00:00:00.000000',0.2172055],
        ['2021-04-01T00:00:00.000000',0.179412],
        ['2021-04-08T00:00:00.000000',0.161324],
        ['2021-04-15T00:00:00.000000',0.13833700000000002],
        ['2021-04-22T00:00:00.000000',0.13892249999999998],
        ['2021-04-29T00:00:00.000000',0.1625205],
        ['2021-05-06T00:00:00.000000',0.16449199999999997],
        ['2021-05-13T00:00:00.000000',0.15859100000000004],
        ['2021-05-20T00:00:00.000000',0.133584],
        ['2021-05-27T00:00:00.000000',0.104246],
        ['2021-06-03T00:00:00.000000',0.132287],
        ['2021-06-10T00:00:00.000000',0.1377325],
        ['2021-06-17T00:00:00.000000',0.135455],
        ['2021-06-24T00:00:00.000000',0.13337300000000002],
        ['2021-07-01T00:00:00.000000',0.11810649999999999],
        ['2021-07-08T00:00:00.000000',0.127291],
        ['2021-07-15T00:00:00.000000',0.11567949999999999],
        ['2021-07-22T00:00:00.000000',0.1220035],
        ['2021-07-29T00:00:00.000000',0.144112],
        ['2021-08-05T00:00:00.000000',0.1379815],
        ['2021-08-12T00:00:00.000000',0.1108835],
        ['2021-08-19T00:00:00.000000',0.126276],
        ['2021-08-26T00:00:00.000000',0.0978265],
        ['2021-09-02T00:00:00.000000',0.125587],
        ['2021-09-09T00:00:00.000000',0.07594300000000001],
        ['2021-09-16T00:00:00.000000',0.1359145],
        ['2021-09-23T00:00:00.000000',0.09279799999999999],
        ['2021-09-30T00:00:00.000000',0.0964995],
        ['2021-10-07T00:00:00.000000',0.095221],
        ['2021-10-14T00:00:00.000000',0.09799100000000001],
        ['2021-10-21T00:00:00.000000',0.0684915],
        ['2021-10-28T00:00:00.000000',0.0678615],
        ['2021-11-04T00:00:00.000000',0.056614500000000005],
        ['2021-11-11T00:00:00.000000',0.076398],
        ['2021-11-18T00:00:00.000000',0.06589749999999998],
        ['2021-11-25T00:00:00.000000',0.08363300000000001],
        ['2021-12-02T00:00:00.000000',0.060923],
        ['2021-12-09T00:00:00.000000',0.056481500000000004],
        ['2021-12-16T00:00:00.000000',0.03630150000000001],
        ['2021-12-23T00:00:00.000000',0.025101],
        ['2021-12-30T00:00:00.000000',0.011824],
        ['2022-01-06T00:00:00.000000',-0.007776500000000002],
]

Highcharts.chart('compound', {

    title: {
      text: 'Análise "Vader Sentiment"'
    },
  
    subtitle: {
      text: 'Compound pelo tempo'
    },

    plotOptions: {
      
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: '{point.x}, {point.y}'
        }
      },
  
    yAxis: {
      title: {
        text: 'Compound'
      }
    },
  
    xAxis: {
        title: {
            enabled: true,
            text: 'Semana'
        },
        categories: dates.map(date => {
          return Highcharts.dateFormat('%e. %b %Y', new Date(date).getTime());
        }),
        label: {
          enabled: false
        }
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    series: [{
      name: 'Compound',
      color: '#045FB4',
      data: data
    }],

    annotations: [{
        draggable: '',
        labelOptions: {
          backgroundColor: 'rgba(255,255,255,0.5)',
          verticalAlign: 'top',
          y: 15
        },
        labels: [{
          point: {
            xAxis: 0,
            yAxis: 0,
            y: 0.0985875
          },
          text: 'Arbois'
        }]
      }],

 
    responsive: {
      rules: [{
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });