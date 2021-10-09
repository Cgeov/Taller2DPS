import React,{useEffect,useState} from 'react';
import { Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Button}
from 'react-native';
import MostrarClima from './MostrarClima';
import {Picker} from '@react-native-community/picker';

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
  });

  const APIKEY = "4b1d3f198c744f7ea841a58849ce8dee";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Escoga una ciudad");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},SV&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }
  return(
    <View>
    <Text style={{fontSize: 20, color: 'white', textAlign: 'center', fontFamily:'Roboto', marginBottom:'2%'}}>Aplicación de Clima</Text>
<Picker style={styles.select} onValueChange = { ciudad => setForm({ ...form, city: ciudad}) }>
<Picker.Item label="--seleccione una ciudad--" value=""/>
<Picker.Item label="Aguilares" value="Aguilares" />
<Picker.Item label="Apopa" value="Apopa"/>
<Picker.Item label="Ayutuxtepeque" value="Ayutuxtepeque"/>
<Picker.Item label="Ciudad Delgado" value="Ciudad Delgado"/>
<Picker.Item label="Cuscatancingo" value="Cuscatancingo"/>
<Picker.Item label="El Paisnal" value="El Paisnal"/>
<Picker.Item label="Guazapa" value="Guazapa"/>
<Picker.Item label="Ilopango" value="Ilopango"/>
<Picker.Item label="Mejicanos" value="Mejicanos"/>
<Picker.Item label="Nejapa" value="Nejapa"/>
<Picker.Item label="Panchimalco" value="Panchimalco"/>
<Picker.Item label="Rosario de Mora" value="Rosario de Mora"/>
<Picker.Item label="San Marcos" value="San Marcos"/>
<Picker.Item label="San Martín" value="San Martín"/>
<Picker.Item label="San Salvador" value="San Salvador"/>
<Picker.Item label="Santiago Texacuangos" value="Santiago Texacuangos"/>
<Picker.Item label="Santo Tomás" value="Santo Tomás"/>
<Picker.Item label="Soyapango" value="Soyapango"/>
<Picker.Item label="Tonacatepeque" value="Tonacatepeque"/>
</Picker>
    
    <Button style={{borderRadius: 30, width:20, height: 30,marginTop:20,backgroundColor:'#C7C7F2'}} onPress={(e)=> weatherData(e)} title="Buscar"/>    
    {weather.data != undefined ? (
        <View>
          <MostrarClima data={weather.data} />
        </View>
      ) : null}
    </View>
  );


}

const styles = StyleSheet.create({
  select: {
  color: '#fff',
  backgroundColor: '#2c3e50',
  borderRadius: 10,
  fontFamily: 'Roboto',
  fontSize: 20,
  textAlign: 'center',
},

});
export default Weather;