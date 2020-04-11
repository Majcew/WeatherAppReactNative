import API from '../../environment';

export const getWeatherCityName = async (cityName) => {
  try {
    console.log('API.js: ', cityName);
    const response = await fetch(
      API.baseUrl + `q=${cityName}` + API.API_KEY + '&units=metric',
    );
    const json = await response.json();
    console.log('json: ', json);
    return json;
  } catch (err) {}
};
