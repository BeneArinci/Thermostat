class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MIN_TEMPERATURE = 10;
    this.powerSavingMode = true;
  }

  getCurrentTemperature() {
    return this.temperature
  }

  up() {
    this.temperature += 1
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }

  isMinimumTemperature() {
    return this.getCurrentTemperature() === this.MIN_TEMPERATURE
  }


  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  powerSavingModeOff() {
    this.powerSavingMode = false
  }

}
