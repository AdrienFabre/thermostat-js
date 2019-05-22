export class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
    this.MEDIUM_USAGE_LIMIT = 18;
    this.HIGH_USAGE_LIMIT = 25;
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  up() {
    if (
      this.powerSavingMode == false &&
      this.temperature < this.MAXIMUM_TEMPERATURE_PSM_OFF
    ) {
      this.temperature += 1;
    } else if (this.temperature < this.MAXIMUM_TEMPERATURE_PSM_ON) {
      this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > this.MINIMUM_TEMPERATURE) {
      this.temperature -= 1;
    }
  }

  reset() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  powerSavingModeOn() {
    this.powerSavingMode = true;
  }

  powerSavingModeOff() {
    this.powerSavingMode = false;
  }

  currentEnergyUsage() {
    if (this.temperature < this.MEDIUM_USAGE_LIMIT) {
      return "low-usage";
    } else if (
      this.MEDIUM_USAGE_LIMIT < this.temperature &&
      this.temperature < this.HIGH_USAGE_LIMIT
    ) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}
