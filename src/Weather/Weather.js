import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ImageBackground,
  StatusBar,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { loadUsers } from '../actions/actions';

const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;

const WeatherComponent = () => {
  const users = useSelector(state => state.contacts.users);
  const dispatch = useDispatch();
  const [cityName,setCity] = useState('');
  const changeEvent = async (newEvent) => {
    dispatch(loadUsers(newEvent));
  };
    return (
      <View style={styles.container} >
        <StatusBar translucent={true} backgroundColor="#000" />
        <ImageBackground
          source={require('./image.png')}
          style={styles.Image_Background_Style}>
          <View style={styles.Search_Box_View} >
            <TextInput
              placeholder="Search"
              placeholderTextColor="#FFF"
              style={styles.Search_Box}
              onChangeText={(text)=>setCity(text)}
            />

            <TouchableOpacity style={styles.button_touch} onPress={() => changeEvent(cityName)} >
              <Image source={require('./search.png')} style={styles.iconStyle} />
            </TouchableOpacity>
          </View>
          <View style={styles.Weather_Box_Main}>
          <View style={styles.Weather_Holder_View}>
            <Image tintColor="#FFF" source={{uri:'http://openweathermap.org/img/wn/' + users.weather[0].icon + '@2x.png'}} style={styles.Weather_Image}/>
            <View>
              <Text style={styles.temprature_text}>{(users.main.temp - 273.15).toFixed(2) + ' °C' }</Text>
              <Text style={styles.city_text}>{users.name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.Info_Box_View}>
          <View style={styles.Info_Holder_Veiw}>
            <Text style={styles.Main_Weather_Text}>{users.weather[0].main}</Text>
            <Text style={styles.description_text}>{users.weather[0].description}</Text>
            <Text style={styles.humidity_text}>Humidity : { users.main.humidity + ' %'}</Text>
            <Text style={styles.other_text}>Visibility : {( users.visibility / 1000).toFixed(2) + ' KM'}</Text>
          </View>
        </View>
        </ImageBackground>
      </View>
    );

};
const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
  },

  Image_Background_Style: {
    height: '100%',
    width: '100%',
  },
  iconStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },

  Search_Box_View: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Search_Box: {
    height: '35%',
    width: '80%',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 15,
    color: '#FFF',
    paddingHorizontal: 15,
  },
  button_touch: {
    marginLeft: '8%',
    height: '35%',
    width: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Weather_Box_Main: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Weather_Holder_View: {
    height: '80%',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Weather_Image: {
    height: '80%',
    width: '50%',
  },
  temprature_text: {
    fontSize: 45,
    color: 'black',
    marginLeft: '3%',
  },
  city_text: {
    fontSize: 30,
    color: 'black',
    marginLeft: '6%',
    marginTop: '3%',
  },
  Info_Box_View: {
    height: '45%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Info_Holder_Veiw: {
    height: '80%',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: 15,
  },
  Main_Weather_Text: {
    fontSize: 28,
    color: '#464646',
    marginLeft: '8%',
    marginTop: '8%',
    fontWeight: 'bold',
  },
  description_text: {
    fontSize: 20,
    color: '#121212',
    marginLeft: '8%',
    marginTop: '3%',
  },
  humidity_text: {
    fontSize: 18,
    color: '#121212',
    marginLeft: '8%',
    marginTop: '5%',
  },
  other_text: {
    fontSize: 18,
    color: '#121212',
    marginLeft: '8%',
    marginTop: '2%',
  },
});



export default WeatherComponent;
