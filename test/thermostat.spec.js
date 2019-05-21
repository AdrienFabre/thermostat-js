import { Thermostat } from '../src/thermostat';

describe("Thermostat", () => {

  it('thermostat temperature starts at 20 degrees', () => {
    const thermostat = new Thermostat();
    expect(thermostat.temperature).toBe(20);
  });

})