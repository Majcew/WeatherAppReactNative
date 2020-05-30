import API from '../../environment';

export const getWeatherCityName = async (cityName) => {
  try {
    const response = await fetch(
      API.baseURL + `q=${cityName}` + API.API_KEY + '&units=metric',
    );
    const json = await response.json();
    return json;
  } catch (err) {}
};
export const getWeatherFromCoords = async (latitude, longitude) => {
  try {
    const response = await fetch(
      API.baseURL +
        `lat=${latitude}&lon=${longitude}` +
        API.API_KEY +
        '&units=metric',
    );
    const json = await response.json();
    return json;
  } catch (err) {}
};
export const getAllInOne = async (latitude, longitude) => {
  try {
    const response = await fetch(
      API.allInOneURL +
        `lat=${latitude}&lon=${longitude}` +
        API.API_KEY +
        '&units=metric',
    );
    const json = await response.json();
    return json;
  } catch (err) {}
};
export const getUVIndex = async (latitude, longitude) => {
  try {
    const response = await fetch(
      API.baseURLUV + `lat=${latitude}&lon=${longitude}` + API.API_KEY,
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log('Error in API#getUVIndex: ', err);
  }
};
