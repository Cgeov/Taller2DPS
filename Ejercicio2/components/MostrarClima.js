import React from "react";
import { Text, TextInput, View, StyleSheet, Image}
from 'react-native';
function MostrarClima(props) {
  const { data } = props;
  const iconurl = "http://openweathermap.org/img/wn/" + `${data.cod != 404 ? data.weather[0].icon : null}` + ".png";
  return (
    <View>
      {data.cod != 404 ? (
        <React.Fragment>
          <View style={styles.box}>
            <Text style={styles.h1}>{data.name} , {data.sys.country}</Text>
            <View style={styles.bubbleblack}>
            <View style={styles.spin}>
            <Image style={styles.img} source = {{ uri: iconurl }} />
            </View>
            </View>
            <Text style={styles.temp}>{Math.floor(data.main.temp - 273.15)}&deg;</Text>
            <Text style={styles.highlow}>{data.weather[0].main} - {data.weather[0].description}</Text>
            <Text style={styles.highlow}>Maxima/minima</Text>
            <Text style={styles.highlow1}>{Math.floor(data.main.temp_max - 273.15)}/{Math.floor(data.main.temp_min - 273.15)}</Text>
            <Text style={styles.highlow}>Humedad: {data.main.humidity} %</Text>
            <Text style={styles.highlow}>Viento: {Math.floor((data.wind.speed * 18) / 5)} km/hr</Text>
          </View>
          
        </React.Fragment>
      ) : (
        <View>
          <Text>{data.message}</Text>
        </View>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  box:{
    backgroundColor: '#C7C7F2',
    padding: '2em 0',
    width: '300px',
    borderRadius: '3px',
    fontFamily: 'Roboto Slab, sans-serif',
    position: 'relative',
    marginLeft: 40,
    marginTop: 10,
    },

  h1:{
    fontSize: '2em',
    textAlign: 'center',
  },

  temp: {
    fontSize: '7em',
    lineHeight: 1,
    textAlign: 'center',
    display: 'block',
    paddingLeft: '30px',
    marginBottom: '54px',
    marginTop: '24px',
  },
  img:{
    maxWidth: '100%',
    position: 'absolute',
    textAlign: 'center',
    width: '85px',
    height: '90px',
    marginBottom: 40,
    },

  highlow:{
    fontSize: '2em',
    color: 'lighten(#313E48, 20%)',
    textAlign: 'center',
    display: 'block',
    fontWeight: '100',
  },
  highlow1:{
    fontSize: '2em',
    color: 'lighten(#313E48, 20%)',
    textAlign: 'center',
    display: 'block',
    fontWeight: '100',
    fontStyle: 'oblique',
  },

  bubbleblack: {
    backgroundColor: '#7474BF',
    position: 'relative',
    width: '100px',
    height: '100px',
    padding: '0px',
    borderRadius: '50px',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
    marginBottom: 30,
  },
spin:{
  position: 'absolute',
  top: '16px',
  right: '18px',
  textAlign: 'center',
  width: '65px',
}
});

export default MostrarClima;