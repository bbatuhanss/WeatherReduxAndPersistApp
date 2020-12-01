const initialState = {
  weatherData: {
    main: '',
    description: '',
    temp: '',
    name: '',
    humidity: '',
    visibility: '',
    icon: '',
  },
};
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'weather':
      return {
        ...state,
        weatherData: action.weatherData,
      };
    default:
      return state;
  }
};

export default weatherReducer;
