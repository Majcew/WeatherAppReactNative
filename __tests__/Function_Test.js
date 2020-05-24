import * as API from '../src/utils/API';
import WeatherImage from '../src/components/WeatherImage';
global.fetch = require('node-fetch');

const name = 'Gliwice';
const coords = {lat: 50.3, lon: 10.68};

// Zrobić resztę

describe('Functions:', () => {
  describe('getWeatherCityName: ', () => {
    it('Should load weather data', async () => {
      const data = await API.getWeatherCityName(name);
      expect(data).toBeDefined();
      expect(data.name).toEqual('Gliwice');
    });
  });
  describe('getWeatherFromCoords: ', () => {
    it('Should load weather data', async () => {
      const data = await API.getWeatherFromCoords(coords.lat, coords.lon);
      expect(data).toBeDefined();
      expect(data.name).toEqual('Westhausen');
    });
  });
  describe('getAllInOne: ', () => {
    it('Should load weather data', async () => {
      const data = await API.getAllInOne(coords.lat, coords.lon);
      expect(data).toBeDefined();
    });
  });
  describe('WeatherImage.js: ', () => {
    it('Should return a path: ', async () => {
      expect(WeatherImage('Rain')).toBeDefined();
      expect(WeatherImage('Rain')).toEqual(require('../src/img/rain.png'));
    });
  });
});
