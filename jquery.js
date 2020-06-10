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