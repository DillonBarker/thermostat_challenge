class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maxTemperature = 25;
    this.MINIMUM = 10;
  }
  up() {
    if(this.temperature<this.maxTemperature) {
      this.temperature++;
    }
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
  isPowerSavingOn() {
    if (this.maxTemperature === 25) {
      return true
    }
    return false
  }
  powerSavingStatus() {
    if (isPowerSavingOn() === true) {
      return 'on';
    }
    return 'off';
  }
  resetTemperature() {
    this.temperature = 20
  }
  currentUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    } if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    };
  };
};
