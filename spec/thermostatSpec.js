'use strict';
describe('thermostat', function() {
  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  describe('#constructor', function(){
    it('begins at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  })
  describe('#up', function() {
    it('increases the temperature', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });
  describe('#down', function() {
    it('decreases the temperature', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
  });
  describe('#powerSavingModeOn', function(){
    it('is on by default', function(){
      expect(thermostat.maxTemperature).toEqual(25)
    });
    it('sets the max temperature to 25', function(){
      thermostat.powerSavingModeOn()
      expect(thermostat.maxTemperature).toEqual(25)
    });
  });
  describe('#powerSavingModeOff', function(){
    it('sets the max temperature to 32', function(){
      thermostat.powerSavingModeOff()
      expect(thermostat.maxTemperature).toEqual(32)
    });
  });
  describe('#isPowerSavingOn', function(){
    it('returns true if its on', function(){
      expect(thermostat.isPowerSavingOn()).toBeTruthy()
    })
    it('returns false if it not on', function(){
      thermostat.powerSavingModeOff()
      expect(thermostat.isPowerSavingOn()).toBeFalsy()
    })
  })
  describe('#resetTemperature', function(){
    it('resets temperature back to 20', function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });
  });
  describe('#currentUsage', function(){
    it('displays a usage string for current temperature', function(){
      expect(thermostat.currentUsage()).toBe('medium-usage')
    })
    it('displays a usage string for a low temperature', function(){
      var i;
      for (i = 0; i < 4; ++i){
        thermostat.down();}
      expect(thermostat.currentUsage()).toBe('low-usage')
    })
    it('displays a usage string for a high temperature', function(){
      var i;
      for (i = 0; i < 6; ++i){
        thermostat.up();}
      expect(thermostat.currentUsage()).toBe('high-usage')
    })
  })
});
