const image = {
  Clouds: require('../img/cloudy.png'),
  Rain: require('../img/rain.png'),
  Snow: require('../img/snow.png'),
  Extreme: require(''),
  Clear: require('../img/sunny.png'),
  Thunderstorm: require('../img/thunderstorm.png'),
  Drizzle: require('../img/drizzle.png'),
  Mist: require('../img/mist.png'),
};
export default (weather) => image[weather];
