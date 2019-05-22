import { Thermostat } from "../src/thermostat";

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  const change_temperature = (direction, times) => {
    for (let i = 0; i < times; i++) {
      if (direction == "up") {
        thermostat.up();
      } else if (direction == "down") {
        thermostat.down();
      }
    }
  };

  it("can switch between power saving mode ON and OFF", () => {
    thermostat.powerSavingModeOff();
    expect(thermostat.powerSavingMode).toBe(false);
    thermostat.powerSavingModeOn();
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it("returns current energy usage: low-usage", () => {
    thermostat.temperature = 17;
    expect(thermostat.currentEnergyUsage()).toBe("low-usage");
  });

  it("returns current energy usage: medium-usage", () => {
    thermostat.temperature = 19;
    expect(thermostat.currentEnergyUsage()).toBe("medium-usage");
  });

  it("returns current energy usage: high-usage", () => {
    thermostat.temperature = 26;
    expect(thermostat.currentEnergyUsage()).toBe("high-usage");
  });

  describe("Power saving mode is ON", () => {
    it("temperature starts at 20 degrees", () => {
      expect(thermostat.temperature).toBe(20);
    });

    it("temperature increases with an up function", () => {
      change_temperature("up", 2);
      expect(thermostat.temperature).toBe(22);
    });

    it("temperature decreases with a down function", () => {
      change_temperature("down", 2);
      expect(thermostat.temperature).toBe(18);
    });

    it("temperature can not be lower than 10 degrees", () => {
      change_temperature("down", 12);
      expect(thermostat.temperature).toBe(10);
    });

    it("temperature can not be higher than 25 degrees", () => {
      change_temperature("up", 7);
      expect(thermostat.temperature).toBe(25);
    });

    it("temperature comes back to 20 degree when using reset", () => {
      change_temperature("up", 4);
      thermostat.reset();
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe("Power saving mode is OFF", () => {
    beforeEach(() => {
      thermostat.powerSavingModeOff();
    });

    it("temperature can be higher than 25 degrees", () => {
      change_temperature("up", 10);
      expect(thermostat.temperature).toBe(30);
    });

    it("temperature can not be higher than 32 degrees", () => {
      change_temperature("up", 15);
      expect(thermostat.temperature).toBe(32);
    });
  });
});
