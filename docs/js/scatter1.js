Highcharts.chart('scatterPlot1', {
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    title: {
      text: 'Scatter do compound pela danceability'
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Danceability'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'compound'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
      borderWidth: 1
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)'
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: 'Danceability: {point.x}, Compound: {point.y}'
        }
      }
    },
    series: [{
      name: 'compound x danceability',
      color: '#8F719B',
      data: [
            [0.6939750000000001,0.15823800000000000000],
            [0.69104,0.183386],
            [0.690205,0.184614],
            [0.68869,0.1881695],
            [0.6874650000000001,0.17085899999999998],
            [0.692845,0.163138],
            [0.6884100000000001,0.16165849999999998],
            [0.68976,0.18106950000000002],
            [0.6884399999999999,0.133811],
            [0.700015,0.0976975],
            [0.6898449999999999,0.14697100000000002],
            [0.689385,0.1560045],
            [0.67793,0.17658250000000003],
            [0.677815,0.1652805],
            [0.6816300000000001,0.14893600000000004],
            [0.6761400000000001,0.17353900000000003],
            [0.68025,0.18562450000000003],
            [0.681075,0.1708695],
            [0.6748050000000001,0.129808],
            [0.6792699999999999,0.13219],
            [0.679035,0.12467500000000001],
            [0.6763849999999999,0.152529],
            [0.674715,0.149334],
            [0.67963,0.15824950000000002],
            [0.68127,0.155105],
            [0.67801,0.18009699999999998],
            [0.67959,0.1793795],
            [0.6813049999999999,0.193598],
            [0.684875,0.195383],
            [0.6787350000000001,0.199839],
            [0.6825450000000001,0.18921799999999997],
            [0.68235,0.16289749999999997],
            [0.6843049999999999,0.1462525],
            [0.68301,0.1811055],
            [0.6794549999999999,0.201252],
            [0.676585,0.17084049999999998],
            [0.673035,0.1328825],
            [0.675625,0.132352],
            [0.6761449999999999,0.1314925],
            [0.6809000000000001,0.13871050000000001],
            [0.68231,0.15473900000000002],
            [0.6832699999999999,0.1720295],
            [0.6813400000000001,0.17113399999999998],
            [0.6772100000000001,0.173274],
            [0.6846000000000001,0.15014399999999997],
            [0.6800550000000001,0.17454150000000002],
            [0.6788150000000001,0.17177999999999996],
            [0.6836699999999999,0.183316],
            [0.67864,0.180619],
            [0.67762,0.169011],
            [0.6738,0.1823285],
            [0.6727850000000001,0.146054],
            [0.6834600000000001,0.134474],
            [0.6790649999999999,0.15106999999999998],
            [0.6811449999999999,0.1755355],
            [0.6818899999999999,0.14670450000000002],
            [0.6801900000000001,0.1160605],
            [0.676455,0.1000655],
            [0.679915,0.109787],
            [0.682375,0.1021295],
            [0.6852700000000002,0.0985875],
            [0.6749449999999999,0.09350349999999999],
            [0.67877,0.1172825],
            [0.6788900000000001,0.13701750000000001],
            [0.670805,0.127436],
            [0.6796899999999999,0.17258050000000005],
            [0.680375,0.16999000000000003],
            [0.6860399999999999,0.13636600000000001],
            [0.67916,0.14287750000000002],
            [0.6807500000000001,0.1485785],
            [0.6842900000000001,0.1804475],
            [0.681045,0.16831699999999997],
            [0.6798140703517589,0.14925477386934674],
            [0.6779999999999999,0.16136733668341707],
            [0.6777989949748744,0.12325628140703516],
            [0.6808100000000001,0.1185125],
            [0.679315,0.1222015],
            [0.675725,0.1356125],
            [0.6816599999999999,0.10333500000000001],
            [0.6792150000000001,0.08052799999999999],
            [0.682265,0.11435950000000002],
            [0.677825,0.0835425],
            [0.6665000000000001,0.11057750000000001],
            [0.6731149999999999,0.11554799999999998],
            [0.67688,0.11478450000000001],
            [0.67755,0.11426650000000001],
            [0.6771299999999999,0.1161735],
            [0.6768649999999999,0.11901100000000002],
            [0.67432,0.0889105],
            [0.6835149999999999,0.12007800000000002],
            [0.6875950000000001,0.155858],
            [0.68756,0.15355200000000002],
            [0.6827199999999999,0.1482255],
            [0.6816450000000001,0.137759],
            [0.6788550000000001,0.14969599999999997],
            [0.67916,0.1540205],
            [0.67551,0.16785049999999999],
            [0.6715049999999999,0.15130000000000002],
            [0.677745,0.1272865],
            [0.68312,0.1406605],
            [0.6831999999999999,0.1145425],
            [0.678125,0.11065350000000002],
            [0.6833849999999999,0.08908200000000002],
            [0.6821708542713568,0.058352261306532684],
            [0.6857939698492463,0.016081407035175892],
            [0.6876582914572864,0.04619748743718594],
            [0.6925075376884422,0.09774924623115577],
            [0.6899346733668343,0.07424120603015076],
            [0.6930700000000001,0.1098625],
            [0.70152,0.07414199999999999],
            [0.69842,0.09497100000000001],
            [0.6959800000000002,0.12191849999999999],
            [0.6889149999999999,0.11656850000000002],
            [0.6916800000000001,0.1520185],
            [0.684465,0.15343600000000002],
            [0.6804749999999999,0.1403985],
            [0.679015,0.2172055],
            [0.68011,0.179412],
            [0.6880449999999999,0.161324],
            [0.689715,0.13833700000000002],
            [0.68814,0.13892249999999998],
            [0.6922499999999999,0.1625205],
            [0.68729,0.16449199999999997],
            [0.6887099999999999,0.15859100000000004],
            [0.690295,0.133584],
            [0.68023,0.104246],
            [0.682225,0.132287],
            [0.6792150000000001,0.1377325],
            [0.6773500000000001,0.135455],
            [0.67867,0.13337300000000002],
            [0.6781649999999999,0.11810649999999999],
            [0.6818649999999999,0.127291],
            [0.6848599999999999,0.11567949999999999],
            [0.678715,0.1220035],
            [0.67928,0.144112],
            [0.6769999999999999,0.1379815],
            [0.67955,0.1108835],
            [0.676135,0.126276],
            [0.67756,0.0978265],
            [0.6735450000000001,0.125587],
            [0.673305,0.07594300000000001],
            [0.6760249999999999,0.1359145],
            [0.677945,0.09279799999999999],
            [0.68207,0.0964995],
            [0.68054,0.095221],
            [0.6803800000000001,0.09799100000000001],
            [0.68111,0.0684915],
            [0.68131,0.0678615],
            [0.680075,0.056614500000000005],
            [0.667165,0.076398],
            [0.6734300000000001,0.06589749999999998],
            [0.6672549999999999,0.08363300000000001],
            [0.674995,0.060923],
            [0.674505,0.056481500000000004],
            [0.6917865168539327,0.03630150000000001],
            [0.6844670658682636,0.025101],
            [0.6771257485029941,0.011824],
            [0.6801104294478528,-0.007776500000000002],

      ]
    }]
  });