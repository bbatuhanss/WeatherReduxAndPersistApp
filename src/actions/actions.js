import axios from 'axios';
export function loadUsers(city){
    return (dispatch)=>{
       try { return axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + ' &appid=6e1ce534b7d8b825f7fcc894216e6e4a')
              .then(response => {
                  dispatch(changeCards(response.data));
              });
        } catch (err) {
          console.log(err);
        }
    };
}
export function changeCards(weather) {
    return {
        type: 'weather',
        users: weather,
    };
}
