'use strict';
describe('thermostat', function() {
  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  it('begins at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });
  describe('#up', function() {
    it('increases the temperature', function() {
      thermostat.up()
      expect(thermostat.temperature).toEqual(21);
    })
  })
  describe('#down', function() {
    it('decreases the temperature', function() {
      thermostat.down()
      expect(thermostat.temperature).toEqual(19);
    })
  })
});
