import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {Marker, AnimatedRegion} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import axios from 'axios';

const carImage = require('../assets/car.png');

const Map_Screen = props => {
  const [position, setPosition] = useState(props.route.params.position1);

  const [gondal, Setgondal] = useState({
    longitude: 70.7927636185296,
    latitude: 21.961967561474946,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      Geolocation.getCurrentPosition(pos => {
        const crd = pos.coords;

        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });

        Setgondal({
          latitude: 22.274222090567267,
          longitude: 70.77274873034337,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      });
    };
    fetchLocation();
    calculateDistance1();
  }, [gondal]);

  const [distance, setDistance] = useState('');
  const [time, SetTime] = useState('');

  const API_KEY = 'AIzaSyCTGqG0CNBUzXCXiPXQ_35hQcoGMex8W5A';

  const calculateDistance1 = () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${position.latitude},${position.longitude}&destinations=${gondal.latitude},${gondal.longitude}&key=${API_KEY}`,
      )
      .then(response => {
        const distanceInKm = response.data.rows[0].elements[0].distance.text;
        const distanceIntime = response.data.rows[0].elements[0].duration.text;

        setDistance(distanceInKm);
        SetTime(distanceIntime);
      })
      .catch(error => {
        console.error('Error calculating distance:', error);
      });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={{height: '100%', width: '100%'}}
        showsMyLocationButton={true}
        showsUserLocation={true}
        initialRegion={position}
        followsUserLocation={true}
        showsCompass={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        showsTraffic={true}
        zoomTapEnabled>
        <Marker image={carImage} coordinate={position} />
        <Marker coordinate={gondal} />

        <MapViewDirections
          origin={position}
          destination={gondal}
          optimizeWaypoints={true}
          strokeColor="black"
          strokeWidth={2}
          apikey="AIzaSyCTGqG0CNBUzXCXiPXQ_35hQcoGMex8W5A"
        />
      </MapView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        {distance ? (
          <Text
            style={{
              color: '#000',

              fontSize: 14,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}>
            kilometer: {distance}
          </Text>
        ) : null}
        {time ? (
          <Text
            style={{
              color: '#000',

              fontSize: 14,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}>
            Time: {time}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default Map_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
