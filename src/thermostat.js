export class Thermostat {

  constructor() { 
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  up() {
    if (this.powerSavingMode == false && this.temperature < 32) {
      this.temperature += 1;
      } else if (this.temperature < 25) {
    this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > 10) {
    this.temperature -= 1;
    }
  }


}

