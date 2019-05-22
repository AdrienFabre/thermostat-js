import { Thermostat } from '../src/thermostat';

describe("Thermostat", () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  })

  describe("Power saving mode is ON", () => {

    it('thermostat temperature starts at 20 degrees', () => {
      expect(thermostat.temperature).toBe(20);
    });

    it('thermostat temperature increases with an up function', () => {
      thermostat.up()
      thermostat.up()
      expect(thermostat.temperature).toBe(22);
    });

    it('thermostat temperature decreases with a down function', () => {
      thermostat.down()
      thermostat.down()
      expect(thermostat.temperature).toBe(18);
    });

    it('thermostat temperature can not be lower than 10 degrees', () => {
      for (let i=0; i<12; i++){ thermostat.down()}
      expect(thermostat.temperature).toBe(10);
    });

    it('thermostat temperature can not be higher than 25 degrees', () => {
      for (let i=0; i<7; i++){ thermostat.up()}
      expect(thermostat.temperature).toBe(25);
    });

  });

})