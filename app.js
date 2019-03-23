// Main traffic chart config

const mainPurple = '#7476bf';

var ctx = document.getElementById('mainTraffic').getContext('2d');
      var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
          datasets: [{
              label: 'Traffic',
              backgroundColor: '#7476bf55',
              borderColor: mainPurple,
              data: ['0', '500', '1000', '750', '1750', '1250', '1500', '1000', '1500', '2250', '2000']
          }]
      },

      // Configuration options go here
      options: {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        }
    }
  });

// Daily traffic bar graph config

var ctx = document.getElementById('dailyTraffic').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: mainPurple,
            borderColor: mainPurple,
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

// Mobile users doughnut chart config

var ctx = document.getElementById('mobileUsers').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Phones', 'Tablets', 'Desktops'],
        datasets: [{
            label: 'Mobile Users',
            backgroundColor: mainPurple,
            borderColor: mainPurple,
            data: [60, 15, 25]
        }]
    },

    // Configuration options go here
    options: {}
});