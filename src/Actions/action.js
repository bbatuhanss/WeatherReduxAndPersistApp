export function changeWeather(weather) {
  return {
    type: 'weather',
    weatherData: weather,
  };
}
