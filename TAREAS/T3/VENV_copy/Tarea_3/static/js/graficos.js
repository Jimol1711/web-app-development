// Sample data for chart 1
var data1 = [
    { sport: 'Football', fans: 100 },
    { sport: 'Basketball', fans: 75 },
    { sport: 'Baseball', fans: 50 }
  ];
  
  // Sample data for chart 2
  var data2 = [
    { sport: 'Hockey', fans: 90 },
    { sport: 'Soccer', fans: 80 },
    { sport: 'Tennis', fans: 60 }
  ];
  
  // Format the data for chart 1
  var seriesData1 = data1.map(function(item) {
    return {
      name: item.sport,
      y: item.fans
    };
  });
  
  // Format the data for chart 2
  var seriesData2 = data2.map(function(item) {
    return {
      name: item.sport,
      y: item.fans
    };
  });
  
  // Create chart 1
  Highcharts.chart('container1', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Number of Fans by Sport (Chart 1)'
    },
    series: [{
      name: 'Fans',
      data: seriesData1
    }]
  });
  
  // Create chart 2
  Highcharts.chart('container2', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Number of Fans by Sport (Chart 2)'
    },
    series: [{
      name: 'Fans',
      data: seriesData2
    }]
  });