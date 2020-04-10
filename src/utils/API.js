import API from '../../environment';

export const getWeatherCityName = async (cityName) => {
  try {
    const response = await fetch(
      API.baseUrl + `q=${cityName}` + API.API_KEY + '&units=metric',
    );
    const json = await response.json();
    return json;
  } catch (err) {}
};
