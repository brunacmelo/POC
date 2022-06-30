Highcharts.chart("fa_diagram", {
  chart: {
    height: 400,
    inverted: false,
    backgroundColor: 'transparent'
  },

  title: {
    useHTML: true,
    text: null
  },

  accessibility: {
    point: {
      descriptionFormatter: function (point) {
        var nodeName = point.toNode.name,
          nodeId = point.toNode.id,
          nodeDesc = nodeName === nodeId ? nodeName : nodeName + ", " + nodeId,
          parentDesc = point.fromNode.id;
        return (
          point.index + ". " + nodeDesc + ", reports to " + parentDesc + "."
        );
      },
    },
  },

  series: [
    {
      type: "organization",
      name: "",
      keys: ["from", "to"],
      data: [
        ["to_read", "F1"],
        ["currently_reading", "F1"],
        ["favorites", "F1"],
        ["ratings_count", "F2"],
        ["text_reviews_count", "F2"],
        ["average_rating", "F3"],
        ["F1", "Interesse"],
        ["F2", "Popularidade"],
        ["F3", "Reconhecimento"],
      ],
      levels: [
        {
          level: 0,
          color: "silver",
          dataLabels: {
            color: "black",
          },
          height: 25,
        },
        {
          level: 1,
          color: "silver",
          dataLabels: {
            color: "black",
          },
          height: 25,
        },
        {
          level: 2,
          dataLabels: {
            color: "black",
          },
          height: 25,
        },
      ],
      nodes: [
        {
          id: "to_read",
          title: null,
          name: "to_read",
          color: "#ffb95c",
          info: "To Read"

        },
        {
          id: "currently_reading",
          title: null,
          name: "currently_reading",
          color: "#ffb95c",
          info: "Currently Reading"
        },
        {
          id: "favorites",
          title: null,
          name: "favorites",
          color: "#ffb95c",
          info: "#Favorites"
        },
        {
          id: "ratings_count",
          title: null,
          name: "ratings_count",
          color: "#dd6326",
          info: "Total de Avaliações"
        },
        {
          id: "text_reviews_count",
          title: null,
          name: "text_reviews_count",
          color: "#dd6326",
          info: "Total de Reviews"
        },
        {
          id: "average_rating",
          title: null,
          name: "average_rating",
          color: "#437a67",
          info: "Avaliação Média"
        },
        {
          id: "F1",
          title: null,
          name: "F1",
          color: "#FFD399",
          info: "Fator 1"
        },
        {
          id: "F2",
          title: null,
          name: "F2",
          color: "#ffb088",
          info: "Fator 2"
        },
        {
          id: "F3",
          title: null,
          name: "F3",
          color: "#80be9b",
          info: "Fator 3"
        },
        {
          id: "Interesse",
          title: null,
          name: "Interesse",
          color: "#FFE4BF",
          info: "Interesse"
        },
        {
          id: "Popularidade",
          title: null,
          name: "Popularidade",
          color: "#FFCEB5",
          info: "Popularidade"
        },
        {
          id: "Reconhecimento",
          title: null,
          name: "Reconhecimento",
          color: "#B0D6C1",
          info: "Reconhecimento"
        },
      ],
      colorByPoint: false,
      color: "#007ad0",
      dataLabels: {
        color: "white",
      },
      borderColor: "transparent",
      nodeWidth: 200,
      nodePadding: 20
    },
  ],

  tooltip: {
    outside: true,
    formatter: function () {
      return this.point.info;
    }
  },
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
});
