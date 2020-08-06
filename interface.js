$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#power-saving-mode-on').click(function() {
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#power-saving-mode-off').click(function() {
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    if(thermostat.currentUsage() === 'low-usage') {
    $('#temperature').css('color', 'green')
    } else if(thermostat.currentUsage() === 'medium-usage') {
    $('#temperature').css('color', 'orange')
    } else {
    $('#temperature').css('color', 'red')
    }
  };
});
