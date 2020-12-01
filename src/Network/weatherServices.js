import {baseApi} from './baseApi';
import {changeWeather} from '../Actions/action';
export function getCurrentWeather(city) {
  return (dispatch) => {
    try {
      return baseApi
        .get('weather?q=' + city + ' &appid=6e1ce534b7d8b825f7fcc894216e6e4a')

        .then((response) => {
          let description = response.data.weather[0].description;
          let temp = (response.data.main.temp - 273.15).toFixed(2) + ' °C';
          let main = response.data.weather[0].main;
          let name = response.data.name;
          let humidity = response.data.main.humidity + ' %';
          let icon = response.data.weather[0].icon;
          let visibility = (response.data.visibility / 1000).toFixed(2) + ' KM';

          const forecast = {
            main: main,
            description: description,
            temp: temp,
            name: name,
            humidity: humidity,
            visibility: visibility,
            icon: icon,
          };
          dispatch(changeWeather(forecast));
        });
    } catch (error) {
      throw Error('Weather coulndt be updated');
    }
  };
}
