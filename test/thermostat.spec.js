import { Thermostat } from '../src/thermostat';



describe("Thermostat", () => {

  

  it('thermostat temperature starts at 20 degrees', () => {
    const thermostat = new Thermostat();
    expect(thermostat.temperature).toBe(20);
  });

  it('thermostat temperature increases with an up function', () => {
    const thermostat = new Thermostat();
    thermostat.up()
    thermostat.up()
    expect(thermostat.temperature).toBe(22);
  });

})