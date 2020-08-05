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

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    if(thermostat.currentUsage() === 'low-usage'){
      $('#temperature').css('color', 'green')
    }
    if(thermostat.currentUsage() === 'medium-usage'){
      $('#temperature').css('color', 'orange')
    }
    if(thermostat.currentUsage() === 'high-usage'){
      $('#temperature').css('color', 'red')
    }
  };
});
