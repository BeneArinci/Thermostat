$(document).ready( function() {
    thermostat = new Thermostat();
    energyUsageColor()
    $('.temperature').text(thermostat.getCurrentTemperature());

    $('.up').click(function() {
        thermostat.up();
        energyUsageColor()
        $('.temperature').text(thermostat.getCurrentTemperature());
    })

    $('.down').click(function() {
        thermostat.down();
        energyUsageColor()
        $('.temperature').text(thermostat.getCurrentTemperature());
    })

    $('.reset').click(function () {
        thermostat.resetTemperature();
        energyUsageColor()
        $('.temperature').text(thermostat.getCurrentTemperature());
    })

    $('.powermode').text(powermodeStatus());

    $('.switchpowermode').click(function() {
        if (thermostat.isPowerSavingModeOn()) {
            thermostat.powerSavingModeOff();
        } else {
         thermostat.switchPowerSavingModeOn();
        };
        $('.powermode').text(powermodeStatus());
        })

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7b6fa8a41854ee697a2ff3a86c16eda9&units=metric', function(data) {
    $('.current_temperature').text(data.main.temp);});

    $('.submit_location').click(function() {
      var city = $('.location').val()
      $.get(setLocation(city), function(data) {
        $('.current_temperature').text(data.main.temp);
      })
    })
    
    function setLocation(location) {
      return 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=7b6fa8a41854ee697a2ff3a86c16eda9&units=metric'
    }

    function powermodeStatus() {
        if (thermostat.isPowerSavingModeOn()) {
            return 'On'
        } else {
            return 'Off'
        }
    }

    function energyUsageColor() {
        if (thermostat.energyUsage() === 'low-usage') {
            $('.energyusage').css('background-color', 'green');
        }
        else if (thermostat.energyUsage() === 'medium-usage') {
            $('.energyusage').css('background-color', 'black');
        } else {
            $('.energyusage').css('background-color', 'red');
        }
    }

})
