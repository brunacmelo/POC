Highcharts.getJSON(
    "https://api.npoint.io/2d653e34c756a80ddce8",
    function (data) {

        Highcharts.chart('test', {
            chart: {
                type: 'spline',
                parallelCoordinates: true,
                parallelAxes: {
                    lineWidth: 2
                },
              backgroundColor: 'transparent'
            },
            title: {
              useHTML: true,
              text: null
            },
            subtitle: {
              align: 'left',
              text: 'Cluster 1'
            },
            tooltip: {
                pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
                    '{series.name}: <b>{point.formattedValue}</b><br/>'
            },

            xAxis: {
              categories: [
                'Gênero Literário',
                'Supergênero',
                'Formato do Livro (resumido)',
                'Tamanho do Livro',
                'Década'
              ],
              offset: 10
            },
            yAxis: [
              {
                  categories: ['Ficção', 'Desconhecido', 'Não-ficção']
              },
              {
                  categories: ['Classics', 'Unknown', 'Plays', 'Short-Stories', 'Romance',
                'Literature', 'History', 'Science', 'Contemporary', 'Biography',
                'Philosophy', 'Travel', 'Fantasy', 'Childrens', 'Anthropology',
                'Drama', 'Epic', 'Politics', 'Reference', 'Sociology', 'Self-Help',
                'Academic', 'Literary-Fiction', 'Sci-Fi', 'Design', 'Young-Adult',
                'Humor', 'Cultural', 'Religion', 'Historical']
              },
              {
                  categories: ['Físico', 'Desconhecido', 'Digital']
              },
              {
                  categories: ['Médio', 'Longo', 'Curto']
              },
              {
                  categories: ['2000', '2010', '1910', '1990', '1920', '1930', '1980', '1970', '1870', '1610', '1810', '1880', '1770', '1950', '1960', '1900', '1890', '1850', '1940', '1840', '1760', '1860', '1630', '1820', '2020', '1540']
              }
            ],
            series: data,

            exporting: {
              enabled: true
            },
            credits: {
              enabled: false
            }
        });
    }
);
