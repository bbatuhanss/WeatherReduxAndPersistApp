import axios from 'axios';

export const baseApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});
