// Fetch data for chart 1
fetch("http://localhost:5000/get-artesanos-data")
  .then((response) => response.json())
  .then((data) => {
    // Se formatea la data del primer gráfico
    var seriesData1 = data.map(function(item) {
      return {
        name: item.tipo_artesania,
        y: item.artesanos
      };
    });

    // Se crea el gráfico 1
    Highcharts.chart('container1', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Número de artesanos por tipo de artesanía.'
      },
      series: [{
        name: 'Artesanos',
        data: seriesData1
      }]
    });
  })
  .catch((error) => console.error("Error:", error));

// Fetch data for chart 2
fetch("http://localhost:5000/get-hinchas-data")
  .then((response) => response.json())
  .then((data) => {
    // Se formatea la data del segundo gráfico
    var seriesData2 = data.map(function(item) {
      return {
        name: item.deporte,
        y: item.hinchas
      };
    });

    // Se crea el gráfico 2
    Highcharts.chart('container2', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Número de hinchas por deporte.'
      },
      series: [{
        name: 'Hinchas',
        data: seriesData2
      }]
    });
  })
  .catch((error) => console.error("Error:", error));