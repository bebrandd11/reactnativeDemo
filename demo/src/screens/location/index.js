import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
// import Geolocation from 'react-native-geolocation-service';

const Location = () => {
  const navigation = useNavigation();
  const [info, setInfo] = useState(0);
  const [sinfo, setSinfo] = useState(0);
  Geolocation.getCurrentPosition(
    (info) => {
        setInfo(info.coords.latitude);
    },
    (e) => console.log(e, 'lt'),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  );
  Geolocation.getCurrentPosition(
    (sinfo) => {
        setSinfo(sinfo.coords.longitude);
    },
    (e) => console.log(e, 'lg'),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  );
  console.log(info);
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Location latitude, {info}</Text>
        <Text>Location longitude, {sinfo}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Location;
