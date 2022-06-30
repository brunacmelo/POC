// Highcharts.chart('bar1', {
//   chart: {
//     type: 'bar',
//     backgroundColor: 'transparent'
//   },
//   title: {
//     useHTML: true,
//     text: null
//   },
//   subtitle:{
//     align: 'left',
//     text: 'Formato de Livros' 
//   },
//   xAxis: {
//     categories: ['Audiobook', 'Board book', 'Brochura', 'Hardcover', 'Kindle Edition', 'Leather Bound', 'Library Binding', 'Mass Market Paperback', 'Newspaper', 'Paperback', 'Pocket', 'Unknown', 'Unknown Binding', 'ebook'],
//     title: {
//       text: null
//     }
//   },
//   yAxis: {
//     min: 0,
//     title: {
//       text: 'Avaliação Média',
//       align: 'high'
//     },
//     labels: {
//       overflow: 'justify'
//     }
//   },
//   plotOptions: {
//     bar: {
//       dataLabels: {
//         enabled: true,
//         format: '{point.y:.1f}', // one decimal
//       }
//     }
//   },
//   legend: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   },
//   tooltip: {
//     pointFormat: '<b>{point.y:.1f}</b>'
//   },
//   series: [{
//     name: 'Avaliação Média Total',
//     color: "#437a67",
//     data: [
//         ['Paperback', 1373.510000000001],
//         ['Unknown', 443.47],
//         ['Hardcover', 360.61],
//         ['ebook', 239.67],
//         ['Mass Market Paperback', 58.44999999999999],
//         ['Kindle Edition', 51.64],
//         ['Newspaper', 8.0],
//         ['Unknown Binding', 7.67],
//         ['Audiobook', 7.220000000000001],
//         ['Pocket', 3.8],
//         ['Brochura', 3.66],
//         ['Leather Bound', 3.21],
//         ['Library Binding', 3.0],
//         ['Board book', 2.79]
//     ]
//   }],
//   exporting: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   }
// });

Highcharts.chart('bar2', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Reconhecimento' 
  },
  xAxis: {
    categories: ['Physical', 'Unknown', 'Digital'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Avaliação Média',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.1f}</b>'
  },
  series: [{
    name: 'Avaliação Média Total',
    color: "#437a67",
    data: [
        ['Physical', 1824.6999999999998],
        ['Unknown', 443.47],
        ['Digital', 298.53]
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});

// Highcharts.chart('bar3', {
//   chart: {
//     type: 'bar',
//     backgroundColor: 'transparent'
//   },
//   title: {
//     useHTML: true,
//     text: null
//   },
//   subtitle:{
//     align: 'left',
//     text: 'Gêneros' 
//   },
//   xAxis: {
//     categories: ['Classics', 'Unknown', 'Plays', 'Short-Stories', 'Romance',
//        'Literature', 'History', 'Science', 'Contemporary', 'Biography',
//        'Philosophy', 'Travel', 'Fantasy', 'Childrens', 'Anthropology',
//        'Drama', 'Epic', 'Politics', 'Reference', 'Sociology', 'Self-Help',
//        'Academic', 'Literary-Fiction', 'Sci-Fi', 'Design', 'Young-Adult',
//        'Humor', 'Cultural', 'Religion', 'Historical'],
//     title: {
//       text: null
//     }
//   },
//   yAxis: {
//     min: 0,
//     title: {
//       text: 'Avaliação Média',
//       align: 'high'
//     },
//     labels: {
//       overflow: 'justify'
//     }
//   },
//   plotOptions: {
//     bar: {
//       dataLabels: {
//         enabled: true,
//         format: '{point.y:.1f}', // one decimal
//       }
//     }
//   },
//   legend: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   },
//   tooltip: {
//     pointFormat: '<b>{point.y:.1f}</b>'
//   },
//   series: [{
//     name: 'Avaliação Média Total',
//     color: "#437a67",
//     data: [
//         ['Unknown', 1361.2700000000007],
//         ['Classics', 475.6900000000001],
//         ['Literature', 172.01],
//         ['Short-Stories', 133.69000000000003],
//         ['Romance', 125.43000000000002],
//         ['History', 75.05000000000001],
//         ['Philosophy', 51.06],
//         ['Plays', 31.700000000000003],
//         ['Biography', 16.490000000000002],
//         ['Fantasy', 11.75],
//         ['Travel', 11.719999999999999],
//         ['Drama', 10.29],
//         ['Politics', 9.5],
//         ['Science', 7.99],
//         ['Reference', 7.87],
//         ['Epic', 7.42],
//         ['Anthropology', 7.27],
//         ['Childrens', 6.640000000000001],
//         ['Design', 4.45],
//         ['Cultural', 4.01],
//         ['Humor', 4.0],
//         ['Contemporary', 3.92],
//         ['Historical', 3.89],
//         ['Sociology', 3.71],
//         ['Literary-Fiction', 3.68],
//         ['Young-Adult', 3.5],
//         ['Self-Help', 3.49],
//         ['Academic', 3.2],
//         ['Religion', 3.07],
//         ['Sci-Fi', 2.94]
//     ]
//   }],
//   exporting: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   }
// });

Highcharts.chart('bar4', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Reconhecimento' 
  },
  xAxis: {
    categories: ['Fiction', 'Unknown', 'Nonfiction'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Avaliação Média',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.1f}</b>'
  },
  series: [{
    name: 'Avaliação Média Total',
    color: "#437a67",
    data: [
        ['Unknown', 1361.2700000000007],
        ['Fiction', 996.5499999999998],
        ['Nonfiction', 208.88]
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});

Highcharts.chart('bar5', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Reconhecimento' 
  },
  xAxis: {
    categories: ['True', 'False'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Avaliação Média',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.1f}</b>'
  },
  series: [{
    name: 'Avaliação Média Total',
    color: "#437a67",
    data: [
        ['False', 2203.7199999999993],
        ['True', 362.98]
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});

Highcharts.chart('bar6', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Reconhecimento' 
  },
  xAxis: {
    categories: ['Médio', 'Longo', 'Curto'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Avaliação Média',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.1f}</b>'
  },
  series: [{
    name: 'Avaliação Média Total',
    color: "#437a67",
    data: [
        ['Médio', 1346.6099999999992],
        ['Curto', 704.5699999999999],
        ['Longo', 515.52]
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});

// Highcharts.chart('bar7', {
//   chart: {
//     type: 'bar',
//     backgroundColor: 'transparent'
//   },
//   title: {
//     useHTML: true,
//     text: null
//   },
//   subtitle:{
//     align: 'left',
//     text: 'Formato de Livros' 
//   },
//   xAxis: {
//     categories: ['Audiobook', 'Board book', 'Brochura', 'Hardcover', 'Kindle Edition', 'Leather Bound', 'Library Binding', 'Mass Market Paperback', 'Newspaper', 'Paperback', 'Pocket', 'Unknown', 'Unknown Binding', 'ebook'],
//     title: {
//       text: null
//     }
//   },
//   yAxis: {
//     min: 0,
//     title: {
//       text: 'Total de Avaliações',
//       align: 'high'
//     },
//     labels: {
//       overflow: 'justify'
//     }
//   },
//   plotOptions: {
//     bar: {
//       dataLabels: {
//         enabled: true,
//         format: '{point.y:.4f}', // one decimal
//       }
//     }
//   },
//   legend: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   },
//   tooltip: {
//     pointFormat: '<b>{point.y:.4f}</b>'
//   },
//   series: [{
//     name: 'Total de Avaliações',
//     color: "#dd6326",
//     data: [
//         ['Paperback', 1.2528681745406947], 
//         ['Unknown', 0.019589978564246796], 
//         ['Mass Market Paperback', 0.01467037000999547], 
//         ['Hardcover', 0.010484943373639635], 
//         ['ebook', 0.0034482961967017872], 
//         ['Pocket', 0.00043343269851659903], 
//         ['Brochura', 0.000299274958499556], 
//         ['Kindle Edition', 6.929026132748345e-05], 
//         ['Audiobook', 5.602191341371e-05], 
//         ['Board book', 2.06396523103142e-05], 
//         ['Leather Bound', 1.1794087034465302e-05], 
//         ['Unknown Binding', 5.89704351723264e-06], 
//         ['Newspaper', 2.94852175861632e-06], 
//         ['Library Binding', 1.47426087930816e-06]
//     ]
//   }],
//   exporting: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   }
// });

Highcharts.chart('bar8', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Popularidade' 
  },
  xAxis: {
    categories: ['Physical', 'Unknown', 'Digital'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total de Avaliações',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.4f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.4f}</b>'
  },
  series: [{
    name: 'Total de Avaliações',
    color: "#dd6326",
    data: [
        ['Physical', 1.2787989491468459],
        ['Unknown', 0.019589978564246796],
        ['Digital', 0.003573608371442981]
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});

// Highcharts.chart('bar9', {
//   chart: {
//     type: 'bar',
//     backgroundColor: 'transparent'
//   },
//   title: {
//     useHTML: true,
//     text: null
//   },
//   subtitle:{
//     align: 'left',
//     text: 'Gêneros' 
//   },
//   xAxis: {
//     categories: ['Classics', 'Unknown', 'Plays', 'Short-Stories', 'Romance',
//        'Literature', 'History', 'Science', 'Contemporary', 'Biography',
//        'Philosophy', 'Travel', 'Fantasy', 'Childrens', 'Anthropology',
//        'Drama', 'Epic', 'Politics', 'Reference', 'Sociology', 'Self-Help',
//        'Academic', 'Literary-Fiction', 'Sci-Fi', 'Design', 'Young-Adult',
//        'Humor', 'Cultural', 'Religion', 'Historical'],
//     title: {
//       text: null
//     }
//   },
//   yAxis: {
//     min: 0,
//     title: {
//       text: 'Total de Avaliações',
//       align: 'high'
//     },
//     labels: {
//       overflow: 'justify'
//     }
//   },
//   plotOptions: {
//     bar: {
//       dataLabels: {
//         enabled: true,
//         format: '{point.y:.4f}', // one decimal
//       }
//     }
//   },
//   legend: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   },
//   tooltip: {
//     pointFormat: '<b>{point.y:.4f}</b>'
//   },
//   series: [{
//     name: 'Total de Avaliações',
//     color: "#dd6326",
//     data: [
//         ['Classics', 1.2769192665257274],
//         ['Literature', 0.006418931868507723],
//         ['Short-Stories', 0.006019407170215214],
//         ['Romance', 0.004900443162820316],
//         ['Unknown', 0.0028659631493750675],
//         ['Philosophy', 0.0015745106191011134],
//         ['Fantasy', 0.0008359059185677259],
//         ['Drama', 0.0005631676558957164],
//         ['History', 0.0004850318292923842],
//         ['Plays', 0.00036709095894773137],
//         ['Cultural', 0.000204922262223834],
//         ['Biography', 0.00018870539255144434],
//         ['Self-Help', 0.000131209218258426],
//         ['Travel', 0.0001046725224308793],
//         ['Science', 8.845565275848949e-05],
//         ['Contemporary', 5.45476525344019e-05],
//         ['Historical', 3.9805043741320295e-05],
//         ['Literary-Fiction', 3.9805043741320295e-05],
//         ['Epic', 3.095947846547129e-05],
//         ['Sociology', 2.65366958275469e-05],
//         ['Reference', 2.506243494823868e-05],
//         ['Religion', 2.21139131896224e-05],
//         ['Childrens', 1.6216869672389762e-05],
//         ['Sci-Fi', 1.47426087930816e-05],
//         ['Anthropology', 1.179408703446527e-05],
//         ['Academic', 4.4227826379244795e-06],
//         ['Politics', 2.94852175861632e-06],
//         ['Humor', 2.94852175861632e-06],
//         ['Young-Adult', 2.94852175861632e-06],
//         ['Design', 0.0]
//     ]
//   }],
//   exporting: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   }
// });

Highcharts.chart('bar10', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Popularidade' 
  },
  xAxis: {
    categories: ['Fiction', 'Unknown', 'Nonfiction'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total de Avaliações',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.4f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.4f}</b>'
  },
  series: [{
    name: 'Total de Avaliações',
    color: "#dd6326",
    data: [
        ['Fiction', 1.296226187001147],
        ['Nonfiction', 0.0028703859320129855],
        ['Unknown', 0.0028659631493750675]
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});

Highcharts.chart('bar11', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Popularidade' 
  },
  xAxis: {
    categories: ['True', 'False'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total de Avaliações',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.4f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.4f}</b>'
  },
  series: [{
    name: 'Total de Avaliações',
    color: "#dd6326",
    data: [
        ['False', 1.295642379692942],
        ['True', 0.006320156389594084]
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});

Highcharts.chart('bar12', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Popularidade' 
  },
  xAxis: {
    categories: ['Médio', 'Longo', 'Curto'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total de Avaliações',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.4f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.4f}</b>'
  },
  series: [{
    name: 'Total de Avaliações',
    color: "#dd6326",
    data: [
        ['Médio', 1.1867608424516365],
        ['Longo', 0.0668356169634353],
        ['Curto', 0.048366076667462725],
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});

// Highcharts.chart('bar13', {
//   chart: {
//     type: 'bar',
//     backgroundColor: 'transparent'
//   },
//   title: {
//     useHTML: true,
//     text: null
//   },
//   subtitle:{
//     align: 'left',
//     text: 'Formato de Livros' 
//   },
//   xAxis: {
//     categories: ['Audiobook', 'Board book', 'Brochura', 'Hardcover', 'Kindle Edition', 'Leather Bound', 'Library Binding', 'Mass Market Paperback', 'Newspaper', 'Paperback', 'Pocket', 'Unknown', 'Unknown Binding', 'ebook'],
//     title: {
//       text: null
//     }
//   },
//   yAxis: {
//     min: 0,
//     title: {
//       text: 'Favorites',
//       align: 'high'
//     },
//     labels: {
//       overflow: 'justify'
//     }
//   },
//   plotOptions: {
//     bar: {
//       dataLabels: {
//         enabled: true,
//         format: '{point.y:.4f}', // one decimal
//       }
//     }
//   },
//   legend: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   },
//   tooltip: {
//     pointFormat: '<b>{point.y:.4f}</b>'
//   },
//   series: [{
//     name: 'Favorites',
//     color: "#ffb95c",
//     data: [
//         ['Paperback', 2.7449754354622597],
//         ['Unknown', 0.2954443948191159],
//         ['Pocket', 0.15855292541313099],
//         ['Hardcover', 0.15386333184457301],
//         ['ebook', 0.07146047342563641],
//         ['Mass Market Paperback', 0.012952210808396604],
//         ['Audiobook', 0.0116123269316659],
//         ['Brochura', 0.0008932559178204561],
//         ['Board book', 0.0],
//         ['Kindle Edition', 0.0],
//         ['Leather Bound', 0.0],
//         ['Library Binding', 0.0],
//         ['Newspaper', 0.0],
//         ['Unknown Binding', 0.0],
//     ]
//   }],
//   exporting: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   }
// });

Highcharts.chart('bar14', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Interesse' 
  },
  xAxis: {
    categories: ['Physical', 'Unknown', 'Digital'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Favorites',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.4f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.4f}</b>'
  },
  series: [{
    name: 'Favorites',
    color: "#ffb95c",
    data: [
        ['Physical', 3.07123715944618],
        ['Unknown', 0.2954443948191159],
        ['Digital', 0.08307280035730231]
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});

// Highcharts.chart('bar15', {
//   chart: {
//     type: 'bar',
//     backgroundColor: 'transparent'
//   },
//   title: {
//     useHTML: true,
//     text: null
//   },
//   subtitle:{
//     align: 'left',
//     text: 'Gêneros' 
//   },
//   xAxis: {
//     categories: ['Classics', 'Unknown', 'Plays', 'Short-Stories', 'Romance',
//        'Literature', 'History', 'Science', 'Contemporary', 'Biography',
//        'Philosophy', 'Travel', 'Fantasy', 'Childrens', 'Anthropology',
//        'Drama', 'Epic', 'Politics', 'Reference', 'Sociology', 'Self-Help',
//        'Academic', 'Literary-Fiction', 'Sci-Fi', 'Design', 'Young-Adult',
//        'Humor', 'Cultural', 'Religion', 'Historical'],
//     title: {
//       text: null
//     }
//   },
//   yAxis: {
//     min: 0,
//     title: {
//       text: 'Favorites',
//       align: 'high'
//     },
//     labels: {
//       overflow: 'justify'
//     }
//   },
//   plotOptions: {
//     bar: {
//       dataLabels: {
//         enabled: true,
//         format: '{point.y:.4f}', // one decimal
//       }
//     }
//   },
//   legend: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   },
//   tooltip: {
//     pointFormat: '<b>{point.y:.4f}</b>'
//   },
//   series: [{
//     name: 'Favorites',
//     color: "#ffb95c",
//     data: [
//         ['Classics', 3.3644484144707434],
//         ['Philosophy', 0.03930326038410004],
//         ['Literature', 0.018088432335864234],
//         ['Romance', 0.010049129075480128],
//         ['Short-Stories', 0.007592675301473869],
//         ['Unknown', 0.0037963376507369377],
//         ['Cultural', 0.0015631978561858],
//         ['History', 0.0013398838767306842],
//         ['Plays', 0.00133988387673068],
//         ['Biography', 0.0006699419383653421],
//         ['Fantasy', 0.0006699419383653421],
//         ['Sociology', 0.00022331397945511401],
//         ['Self-Help', 0.00022331397945511401],
//         ['Young-Adult', 0.00022331397945511401],
//         ['Drama', 0.00022331397945511401],
//         ['Literary-Fiction', 0.0],
//         ['Anthropology', 0.0],
//         ['Humor', 0.0],
//         ['Historical', 0.0],
//         ['Politics', 0.0],
//         ['Reference', 0.0],
//         ['Religion', 0.0],
//         ['Epic', 0.0],
//         ['Sci-Fi', 0.0],
//         ['Science', 0.0],
//         ['Design', 0.0],
//         ['Contemporary', 0.0],
//         ['Travel', 0.0],
//         ['Childrens', 0.0],
//         ['Academic', 0.0],
//     ]
//   }],
//   exporting: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   }
// });

Highcharts.chart('bar16', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Interesse' 
  },
  xAxis: {
    categories: ['Fiction', 'Unknown', 'Nonfiction'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Favorites',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.4f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.4f}</b>'
  },
  series: [{
    name: 'Favorites',
    color: "#ffb95c",
    data: [
        ['Fiction', 3.4026351049575667],
        ['Nonfiction', 0.04332291201429209],
        ['Unknown', 0.0037963376507369377]
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});

Highcharts.chart('bar17', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Interesse' 
  },
  xAxis: {
    categories: ['True', 'False'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Favorites',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.4f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.4f}</b>'
  },
  series: [{
    name: 'Favorites',
    color: "#ffb95c",
    data: [
        ['False', 3.371817775792761],
        ['True', 0.07793657882983472]
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});

Highcharts.chart('bar18', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  title: {
    useHTML: true,
    text: null
  },
  subtitle:{
    align: 'left',
    text: 'Interesse' 
  },
  xAxis: {
    categories: ['Médio', 'Longo', 'Curto'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Favorites',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.4f}', // one decimal
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: '<b>{point.y:.4f}</b>'
  },
  series: [{
    name: 'Favorites',
    color: "#ffb95c",
    data: [
        ['Médio', 1.8387673068334076],
        ['Curto', 1.101831174631532],
        ['Longo', 0.5091558731576593]
    ]
  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});