//__tests__/Render_Test.js
import React from 'react';
import BasicWeather from '../src/components/BasicWeather';
import CityHeader from '../src/components/CityHeader';
import DetailsBar from '../src/components/DetailsBar';
//import Location from '../src/components/Location';
import WeatherMap from '../src/components/WeatherMap';
import About from '../src/screens/About';
//import Main from '../src/screens/Main';
import Map from '../src/screens/Map';
import WeatherForecast from '../src/screens/WeaterForecast';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

const weather = {
  base: 'stations',
  clouds: {all: 90},
  cod: 200,
  coord: {lat: 50.3, lon: 18.68},
  dt: 1590249302,
  id: 3099230,
  main: {
    feels_like: 11.71,
    humidity: 72,
    pressure: 1019,
    temp: 14.63,
    temp_max: 15,
    temp_min: 13.89,
  },
  name: 'Gliwice',
  sys: {
    country: 'PL',
    id: 1705,
    sunrise: 1590202074,
    sunset: 1590258992,
    type: 1,
  },
  timezone: 7200,
  visibility: 10000,
  weather: [
    {description: 'overcast clouds', icon: '04d', id: 804, main: 'Clouds'},
  ],
  wind: {deg: 170, speed: 4.1},
};

describe('Rendering: ', () => {
  describe('Components: ', () => {
    describe('BasicWeather.js', () => {
      test('Result', async () => {
        const tree = renderer
          .create(
            <BasicWeather
              updateTime={weather?.dt}
              temperature={weather?.main?.temp}
              basicWeatherDescription={weather?.weather[0]?.main}
              advancedWeatherDescription={weather?.weather[0]?.description}
            />,
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('CityHeader.js', () => {
      test('Result ', () => {
        const tree = renderer.create(<CityHeader />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('DetailsBar.js', () => {
      test('Result ', async () => {
        const tree = renderer.create(<DetailsBar />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    // describe('Location.js', () => {
    //   test('Result ', async () => {
    //     const tree = renderer.create(<Location />).toJSON();
    //     expect(tree).toMatchSnapshot();
    //   });
    // });
    describe('WeatherMap.js', () => {
      test('Result ', async () => {
        const tree = renderer.create(<WeatherMap />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
  describe('Screens:', () => {
    describe('About.js', () => {
      test('Result ', async () => {
        const tree = renderer.create(<About />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    // describe('Main.js', () => {
    //   test('Result ', async () => {
    //     const tree = renderer.create(<Main />).toJSON();
    //     expect(tree).toMatchSnapshot();
    //   });
    // });
    describe('Map.js', () => {
      test('Result ', async () => {
        const tree = renderer.create(<Map />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('WeatherForecast.js', () => {
      test('Result ', async () => {
        const tree = renderer.create(<WeatherForecast />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
