const dates = [
  ['2019-01-03T00:00:00.000000'],
  ['2019-01-10T00:00:00.000000'],
  ['2019-01-17T00:00:00.000000'],
  ['2019-01-24T00:00:00.000000'],
  ['2019-01-31T00:00:00.000000'],
  ['2019-02-07T00:00:00.000000'],
  ['2019-02-14T00:00:00.000000'],
  ['2019-02-21T00:00:00.000000'],
  ['2019-02-28T00:00:00.000000'],
  ['2019-03-07T00:00:00.000000'],
  ['2019-03-14T00:00:00.000000'],
  ['2019-03-21T00:00:00.000000'],
  ['2019-03-28T00:00:00.000000'],
  ['2019-04-04T00:00:00.000000'],
  ['2019-04-11T00:00:00.000000'],
  ['2019-04-18T00:00:00.000000'],
  ['2019-04-25T00:00:00.000000'],
  ['2019-05-02T00:00:00.000000'],
  ['2019-05-09T00:00:00.000000'],
  ['2019-05-16T00:00:00.000000'],
  ['2019-05-23T00:00:00.000000'],
  ['2019-05-30T00:00:00.000000'],
  ['2019-06-06T00:00:00.000000'],
  ['2019-06-13T00:00:00.000000'],
  ['2019-06-20T00:00:00.000000'],
  ['2019-06-27T00:00:00.000000'],
  ['2019-07-04T00:00:00.000000'],
  ['2019-07-11T00:00:00.000000'],
  ['2019-07-18T00:00:00.000000'],
  ['2019-07-25T00:00:00.000000'],
  ['2019-08-01T00:00:00.000000'],
  ['2019-08-08T00:00:00.000000'],
  ['2019-08-15T00:00:00.000000'],
  ['2019-08-22T00:00:00.000000'],
  ['2019-08-29T00:00:00.000000'],
  ['2019-09-05T00:00:00.000000'],
  ['2019-09-12T00:00:00.000000'],
  ['2019-09-19T00:00:00.000000'],
  ['2019-09-26T00:00:00.000000'],
  ['2019-10-03T00:00:00.000000'],
  ['2019-10-10T00:00:00.000000'],
  ['2019-10-17T00:00:00.000000'],
  ['2019-10-24T00:00:00.000000'],
  ['2019-10-31T00:00:00.000000'],
  ['2019-11-07T00:00:00.000000'],
  ['2019-11-14T00:00:00.000000'],
  ['2019-11-21T00:00:00.000000'],
  ['2019-11-28T00:00:00.000000'],
  ['2019-12-05T00:00:00.000000'],
  ['2019-12-12T00:00:00.000000'],
  ['2019-12-19T00:00:00.000000'],
  ['2019-12-26T00:00:00.000000'],
  ['2020-01-02T00:00:00.000000'],
  ['2020-01-09T00:00:00.000000'],
  ['2020-01-16T00:00:00.000000'],
  ['2020-01-23T00:00:00.000000'],
  ['2020-01-30T00:00:00.000000'],
  ['2020-02-06T00:00:00.000000'],
  ['2020-02-13T00:00:00.000000'],
  ['2020-02-20T00:00:00.000000'],
  ['2020-02-27T00:00:00.000000'],
  ['2020-03-05T00:00:00.000000'],
  ['2020-03-12T00:00:00.000000'],
  ['2020-03-19T00:00:00.000000'],
  ['2020-03-26T00:00:00.000000'],
  ['2020-04-02T00:00:00.000000'],
  ['2020-04-09T00:00:00.000000'],
  ['2020-04-16T00:00:00.000000'],
  ['2020-04-23T00:00:00.000000'],
  ['2020-04-30T00:00:00.000000'],
  ['2020-05-07T00:00:00.000000'],
  ['2020-05-14T00:00:00.000000'],
  ['2020-05-21T00:00:00.000000'],
  ['2020-05-28T00:00:00.000000'],
  ['2020-06-04T00:00:00.000000'],
  ['2020-06-11T00:00:00.000000'],
  ['2020-06-18T00:00:00.000000'],
  ['2020-06-25T00:00:00.000000'],
  ['2020-07-02T00:00:00.000000'],
  ['2020-07-09T00:00:00.000000'],
  ['2020-07-16T00:00:00.000000'],
  ['2020-07-23T00:00:00.000000'],
  ['2020-07-30T00:00:00.000000'],
  ['2020-08-06T00:00:00.000000'],
  ['2020-08-13T00:00:00.000000'],
  ['2020-08-20T00:00:00.000000'],
  ['2020-08-27T00:00:00.000000'],
  ['2020-09-03T00:00:00.000000'],
  ['2020-09-10T00:00:00.000000'],
  ['2020-09-17T00:00:00.000000'],
  ['2020-09-24T00:00:00.000000'],
  ['2020-10-01T00:00:00.000000'],
  ['2020-10-08T00:00:00.000000'],
  ['2020-10-15T00:00:00.000000'],
  ['2020-10-22T00:00:00.000000'],
  ['2020-10-29T00:00:00.000000'],
  ['2020-11-05T00:00:00.000000'],
  ['2020-11-12T00:00:00.000000'],
  ['2020-11-19T00:00:00.000000'],
  ['2020-11-26T00:00:00.000000'],
  ['2020-12-03T00:00:00.000000'],
  ['2020-12-10T00:00:00.000000'],
  ['2020-12-17T00:00:00.000000'],
  ['2020-12-24T00:00:00.000000'],
  ['2020-12-31T00:00:00.000000'],
  ['2021-01-07T00:00:00.000000'],
  ['2021-01-14T00:00:00.000000'],
  ['2021-01-21T00:00:00.000000'],
  ['2021-01-28T00:00:00.000000'],
  ['2021-02-04T00:00:00.000000'],
  ['2021-02-11T00:00:00.000000'],
  ['2021-02-18T00:00:00.000000'],
  ['2021-02-25T00:00:00.000000'],
  ['2021-03-04T00:00:00.000000'],
  ['2021-03-11T00:00:00.000000'],
  ['2021-03-18T00:00:00.000000'],
  ['2021-03-25T00:00:00.000000'],
  ['2021-04-01T00:00:00.000000'],
  ['2021-04-08T00:00:00.000000'],
  ['2021-04-15T00:00:00.000000'],
  ['2021-04-22T00:00:00.000000'],
  ['2021-04-29T00:00:00.000000'],
  ['2021-05-06T00:00:00.000000'],
  ['2021-05-13T00:00:00.000000'],
  ['2021-05-20T00:00:00.000000'],
  ['2021-05-27T00:00:00.000000'],
  ['2021-06-03T00:00:00.000000'],
  ['2021-06-10T00:00:00.000000'],
  ['2021-06-17T00:00:00.000000'],
  ['2021-06-24T00:00:00.000000'],
  ['2021-07-01T00:00:00.000000'],
  ['2021-07-08T00:00:00.000000'],
  ['2021-07-15T00:00:00.000000'],
  ['2021-07-22T00:00:00.000000'],
  ['2021-07-29T00:00:00.000000'],
  ['2021-08-05T00:00:00.000000'],
  ['2021-08-12T00:00:00.000000'],
  ['2021-08-19T00:00:00.000000'],
  ['2021-08-26T00:00:00.000000'],
  ['2021-09-02T00:00:00.000000'],
  ['2021-09-09T00:00:00.000000'],
  ['2021-09-16T00:00:00.000000'],
  ['2021-09-23T00:00:00.000000'],
  ['2021-09-30T00:00:00.000000'],
  ['2021-10-07T00:00:00.000000'],
  ['2021-10-14T00:00:00.000000'],
  ['2021-10-21T00:00:00.000000'],
  ['2021-10-28T00:00:00.000000'],
  ['2021-11-04T00:00:00.000000'],
  ['2021-11-11T00:00:00.000000'],
  ['2021-11-18T00:00:00.000000'],
  ['2021-11-25T00:00:00.000000'],
  ['2021-12-02T00:00:00.000000'],
  ['2021-12-09T00:00:00.000000'],
  ['2021-12-16T00:00:00.000000'],
  ['2021-12-23T00:00:00.000000'],
  ['2021-12-30T00:00:00.000000'],
  ['2022-01-06T00:00:00.000000'],
];

const processedDate = dates.map((dateEl) => {
  return [new Date(dateEl).getTime()]
})


Highcharts.chart('seriesTemporais', {

    title: {
      text: 'Séries Temporais das Features do Spotify'
    },
  
    subtitle: {
      text: 'Source: spotifyfordevelopers.com'
    },

    plotOptions: {
      
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: '{point.x}, {point.y}'
        }
      },
  
    yAxis: {
      title: {
        text: 'Feature'
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
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
      }
    },
  
    series: [{
      name: 'Danceability',
      color: '#8F719B',
      data: [
        [0.6939750000000001000],
        [0.69104],
        [0.690205],
        [0.68869],
        [0.6874650000000001],
        [0.692845],
        [0.6884100000000001],
        [0.68976],
        [0.6884399999999999],
        [0.700015],
        [0.6898449999999999],
        [0.689385],
        [0.67793],
        [0.677815],
        [0.6816300000000001],
        [0.6761400000000001],
        [0.68025],
        [0.681075],
        [0.6748050000000001],
        [0.6792699999999999],
        [0.679035],
        [0.6763849999999999],
        [0.674715],
        [0.67963],
        [0.68127],
        [0.67801],
        [0.67959],
        [0.6813049999999999],
        [0.684875],
        [0.6787350000000001],
        [0.6825450000000001],
        [0.68235],
        [0.6843049999999999],
        [0.68301],
        [0.6794549999999999],
        [0.676585],
        [0.673035],
        [0.675625],
        [0.6761449999999999],
        [0.6809000000000001],
        [0.68231],
        [0.6832699999999999],
        [0.6813400000000001],
        [0.6772100000000001],
        [0.6846000000000001],
        [0.6800550000000001],
        [0.6788150000000001],
        [0.6836699999999999],
        [0.67864],
        [0.67762],
        [0.6738],
        [0.6727850000000001],
        [0.6834600000000001],
        [0.6790649999999999],
        [0.6811449999999999],
        [0.6818899999999999],
        [0.6801900000000001],
        [0.676455],
        [0.679915],
        [0.682375],
        [0.6852700000000002],
        [0.6749449999999999],
        [0.67877],
        [0.6788900000000001],
        [0.670805],
        [0.6796899999999999],
        [0.680375],
        [0.6860399999999999],
        [0.67916],
        [0.6807500000000001],
        [0.6842900000000001],
        [0.681045],
        [0.6798140703517589],
        [0.6779999999999999],
        [0.6777989949748744],
        [0.6808100000000001],
        [0.679315],
        [0.675725],
        [0.6816599999999999],
        [0.6792150000000001],
        [0.682265],
        [0.677825],
        [0.6665000000000001],
        [0.6731149999999999],
        [0.67688],
        [0.67755],
        [0.6771299999999999],
        [0.6768649999999999],
        [0.67432],
        [0.6835149999999999],
        [0.6875950000000001],
        [0.68756],
        [0.6827199999999999],
        [0.6816450000000001],
        [0.6788550000000001],
        [0.67916],
        [0.67551],
        [0.6715049999999999],
        [0.677745],
        [0.68312],
        [0.6831999999999999],
        [0.678125],
        [0.6833849999999999],
        [0.6821708542713568],
        [0.6857939698492463],
        [0.6876582914572864],
        [0.6925075376884422],
        [0.6899346733668343],
        [0.6930700000000001],
        [0.70152],
        [0.69842],
        [0.6959800000000002],
        [0.6889149999999999],
        [0.6916800000000001],
        [0.684465],
        [0.6804749999999999],
        [0.679015],
        [0.68011],
        [0.6880449999999999],
        [0.689715],
        [0.68814],
        [0.6922499999999999],
        [0.68729],
        [0.6887099999999999],
        [0.690295],
        [0.68023],
        [0.682225],
        [0.6792150000000001],
        [0.6773500000000001],
        [0.67867],
        [0.6781649999999999],
        [0.6818649999999999],
        [0.6848599999999999],
        [0.678715],
        [0.67928],
        [0.6769999999999999],
        [0.67955],
        [0.676135],
        [0.67756],
        [0.6735450000000001],
        [0.673305],
        [0.6760249999999999],
        [0.677945],
        [0.68207],
        [0.68054],
        [0.6803800000000001],
        [0.68111],
        [0.68131],
        [0.680075],
        [0.667165],
        [0.6734300000000001],
        [0.6672549999999999],
        [0.674995],
        [0.674505],
        [0.6917865168539327],
        [0.6844670658682636],
        [0.6771257485029941],
        [0.6801104294478528],
    ],
    }, {
      name: 'Energy',
      color: '#DECA4D',
      data: [
        [0.695050000000000000],
        [0.685995],
        [0.693635],
        [0.694285],
        [0.6924549999999999],
        [0.690765],
        [0.682115],
        [0.6829],
        [0.69527],
        [0.6963750000000001],
        [0.686275],
        [0.681045],
        [0.6920599999999999],
        [0.68099],
        [0.69316],
        [0.697095],
        [0.6952000000000002],
        [0.6983599999999999],
        [0.6732235],
        [0.683835],
        [0.688925],
        [0.686975],
        [0.6946199999999999],
        [0.6932300000000001],
        [0.698665],
        [0.695245],
        [0.6959150000000001],
        [0.68829],
        [0.6927600000000002],
        [0.69281],
        [0.69624],
        [0.69965],
        [0.7030200000000001],
        [0.69916],
        [0.69706],
        [0.69077],
        [0.6955849999999999],
        [0.6932650000000001],
        [0.693185],
        [0.690225],
        [0.6839000000000002],
        [0.67917],
        [0.682475],
        [0.6825399999999999],
        [0.684955],
        [0.6828049999999999],
        [0.68275],
        [0.6863399999999998],
        [0.6859350000000001],
        [0.694475],
        [0.693195],
        [0.7056699999999999],
        [0.7092149999999999],
        [0.69695],
        [0.693275],
        [0.6989150000000001],
        [0.6989750000000001],
        [0.7015350000000001],
        [0.704755],
        [0.7081700000000001],
        [0.723115],
        [0.7085049999999999],
        [0.705955],
        [0.7082599999999999],
        [0.70613],
        [0.7123249999999999],
        [0.7059899999999999],
        [0.7028899999999999],
        [0.692175],
        [0.69359],
        [0.6905899999999999],
        [0.687295],
        [0.6927035175879398],
        [0.6949698492462311],
        [0.6998341708542714],
        [0.6994149999999999],
        [0.6908799999999999],
        [0.69833],
        [0.6997999999999999],
        [0.705375],
        [0.708305],
        [0.7081400000000001],
        [0.693125],
        [0.6996000000000001],
        [0.703245],
        [0.7045950000000001],
        [0.705065],
        [0.7177449999999999],
        [0.726735],
        [0.720615],
        [0.719315],
        [0.7203700000000001],
        [0.716465],
        [0.7241350000000001],
        [0.7135849999999999],
        [0.711065],
        [0.71057],
        [0.7120099999999999],
        [0.707795],
        [0.7026],
        [0.71088],
        [0.707815],
        [0.70678],
        [0.719211055276382],
        [0.7347336683417086],
        [0.7307989949748743],
        [0.7148693467336683],
        [0.7138793969849246],
        [0.711695],
        [0.710675],
        [0.7175499999999999],
        [0.7286],
        [0.71627],
        [0.7072149999999999],
        [0.7036800000000001],
        [0.7021649999999999],
        [0.7067],
        [0.7074699999999998],
        [0.69525],
        [0.698595],
        [0.700635],
        [0.699905],
        [0.6933400000000001],
        [0.688635],
        [0.6868000000000001],
        [0.6625649999999998],
        [0.6732049999999999],
        [0.66565],
        [0.6712600000000001],
        [0.685465],
        [0.70289],
        [0.7086150000000001],
        [0.710985],
        [0.713435],
        [0.718805],
        [0.7049850000000001],
        [0.7212199999999999],
        [0.7191649999999999],
        [0.7241300000000002],
        [0.71985],
        [0.7138550000000001],
        [0.7141299999999999],
        [0.7133449999999999],
        [0.71745],
        [0.71839],
        [0.7171649999999999],
        [0.7043],
        [0.705],
        [0.715925],
        [0.704525],
        [0.70738],
        [0.705245],
        [0.70907],
        [0.7115799999999999],
        [0.7203539325842697],
        [0.7216167664670659],
        [0.7224131736526946],
        [0.7224478527607361],
      ]
    }, {
      name: 'Valence',
      color: '#2E8B57',
      data: [
            [0.6191165000000001000],
            [0.607005],
            [0.6009515000000001],
            [0.6024165],
            [0.602035],
            [0.6126014999999999],
            [0.5935015],
            [0.5950865000000001],
            [0.6095065],
            [0.6269615000000001],
            [0.6143814999999999],
            [0.6119465],
            [0.6177715],
            [0.6065404999999999],
            [0.6078665],
            [0.6033865],
            [0.6108315000000001],
            [0.6205865],
            [0.6048880000000001],
            [0.6147875],
            [0.6125324999999999],
            [0.6138475],
            [0.6116125000000001],
            [0.6133700000000001],
            [0.6220300000000001],
            [0.616576],
            [0.616956],
            [0.6128910000000001],
            [0.620406],
            [0.6181145000000001],
            [0.6230760000000001],
            [0.629551],
            [0.633076],
            [0.637546],
            [0.638286],
            [0.636861],
            [0.6285315],
            [0.6275565000000001],
            [0.6295515],
            [0.638236],
            [0.6353525000000001],
            [0.6338425],
            [0.6405905000000002],
            [0.6391605000000001],
            [0.6418504999999999],
            [0.6470855],
            [0.6472155],
            [0.6522605000000001],
            [0.6454605],
            [0.6491055],
            [0.6407465000000001],
            [0.6511525],
            [0.663015],
            [0.6452704999999999],
            [0.6413765000000001],
            [0.650254],
            [0.647619],
            [0.6449000000000001],
            [0.644725],
            [0.6488945000000002],
            [0.6536685],
            [0.6331345],
            [0.6442610000000001],
            [0.6387510000000001],
            [0.632866],
            [0.644251],
            [0.6412059999999999],
            [0.6404510000000001],
            [0.630836],
            [0.6282505],
            [0.6275185000000001],
            [0.6148585],
            [0.6157723618090453],
            [0.6141492462311557],
            [0.6010291457286433],
            [0.6206785],
            [0.6161735],
            [0.6198440000000001],
            [0.619534],
            [0.6227935],
            [0.635676],
            [0.634811],
            [0.611721],
            [0.6258535],
            [0.6262285],
            [0.6259435000000001],
            [0.622541],
            [0.6326709999999999],
            [0.64244],
            [0.629481],
            [0.6374609999999999],
            [0.6321045000000001],
            [0.6301260000000001],
            [0.6439900000000001],
            [0.6284495],
            [0.6297835],
            [0.6289065],
            [0.6352145],
            [0.6436135000000001],
            [0.6481534999999999],
            [0.6577885000000001],
            [0.652195],
            [0.6664250000000002],
            [0.6701708542713567],
            [0.6881356783919598],
            [0.6871105527638192],
            [0.6729236180904521],
            [0.6693356783919596],
            [0.6766990000000002],
            [0.676009],
            [0.676219],
            [0.690205],
            [0.672706],
            [0.665111],
            [0.6657959999999999],
            [0.6585659999999999],
            [0.659606],
            [0.664091],
            [0.6630510000000001],
            [0.676436],
            [0.6732560000000001],
            [0.682111],
            [0.6763429999999999],
            [0.674461],
            [0.676446],
            [0.6417665000000001],
            [0.6596995],
            [0.6533104999999999],
            [0.6578844999999999],
            [0.6665155],
            [0.6821545],
            [0.6901195],
            [0.6920445],
            [0.6849745],
            [0.6945195],
            [0.6829445],
            [0.6944995],
            [0.6756145000000001],
            [0.6807795],
            [0.6739445000000001],
            [0.6817495],
            [0.6646595],
            [0.6570445],
            [0.6602595],
            [0.6561595],
            [0.6611495],
            [0.6444794999999999],
            [0.64937],
            [0.659],
            [0.63095],
            [0.64097],
            [0.6372950000000001],
            [0.64586],
            [0.6491499999999999],
            [0.6649269662921349],
            [0.6632694610778442],
            [0.6707844311377247],
            [0.6722760736196319],
      ]
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