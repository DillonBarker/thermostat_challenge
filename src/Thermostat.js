class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maxTemperature = 25;
    this.MINIMUM = 10;
  }
  up() {
    this.temperature++;
  }
  down() {
    if(this.temperature>this.MINIMUM) {
      this.temperature--;
    }
  }
  powerSavingModeOn() {
    this.maxTemperature = 25
  }
  powerSavingModeOff() {
    this.maxTemperature = 32
  }
  resetTemperature() {
    this.temperature = 20
  }
  currentUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage'
    }
  }
}
