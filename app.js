// Main traffic chart config

const headerPurple = '#7476bf';
const secondTone = '#81c98f';
const thirdTone = '#73b1bf';
const alertCancel = document.querySelector('.alertCancel');
const alertBar = document.querySelector('.alert-bar');

const searchUser = document.getElementById('searchUser');
const messageUser = document.getElementById('messageUser');
const sendMessage = document.querySelector('.userMessage');



const success = document.createElement('p');
success.textContent = 'Your message was sent successfully';
success.classList.add('successful-send');
const fail = document.createElement('p');
fail.textContent = 'Please complete all fields';
fail.classList.add('unsuccessful-send');

const sendMessageButton = sendMessage.querySelector('button');


sendMessageButton.addEventListener('click', (e) => {
  if (messageUser.value === '' || searchUser.value === '' ) {
    e.preventDefault();
    sendMessage.prepend(fail);
    success.parentNode.removeChild(success);
  } else {
    e.preventDefault();
    messageUser.value = '';
    searchUser.value = '';
    sendMessage.prepend(success);
    fail.parentNode.removeChild(fail);
  }
});



function hideAlertBar(){
  alertBar.classList.add('hidden');
}


alertCancel.addEventListener('click', (e) => {
  alertBar.classList.add('rise');
  setTimeout(hideAlertBar, 900);
});

var ctx = document.getElementById('mainTraffic').getContext('2d');
      var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
          datasets: [{
              label: 'Hourly',
              backgroundColor: '#7476bf55',
              borderColor: headerPurple,
              data: ['0', '500', '1000', '750', '1750', '1250', '1500', '1000', '1500', '2050', '1900']
          }]
      },

      // Configuration options go here
      options: {
        responsive: true,
        legend: {
          display: false
        },
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
            label: '',
            backgroundColor: headerPurple,
            borderColor: headerPurple,
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false,
      }
    }
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
            backgroundColor: [headerPurple, secondTone, thirdTone],
            borderColor: 'transparent',
            data: [70, 14, 16]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'right',
        lineWidth: 1
      }
    }
});

// Alert bar config

