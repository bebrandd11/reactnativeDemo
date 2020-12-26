import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './style';

const Home = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState(0);

  const [name, setName] = useState([
    {
      name: 'anny',
      email: 'anny@test.com',
      image: require('../../../assets/1.jpg'),
    },
    {
      name: 'peter',
      email: 'peter@test.com',
      image: require('../../../assets/2.jpg'),
    },
    {
      name: 'sam',
      email: 'sam@test.com',
      image: require('../../../assets/3.jpg'),
    },
    {
      name: 'kelly',
      email: 'kelly@test.com',
      image: require('../../../assets/4.jpg'),
    },
    {
      name: 'bruce',
      email: 'bruce@test.com',
      image: require('../../../assets/5.jpg'),
    },
    {
      name: 'kevin',
      email: 'kevin@test.com',
      image: require('../../../assets/6.jpg'),
    },
  ]);

  const [data, setData] = useState(null);

  useEffect(async () => {
    const resp = await fetch('https://reactnative.dev/movies.json');
    const respJson = await resp.json();
    console.log('response', respJson.title);
    setData({data: respJson});
  }, []);

  const [image, setImage] = useState([
    {image: require('../../../assets/starwar.jpg')},
    {image: require('../../../assets/future.jpg')},
    {image: require('../../../assets/metrix.jpg')},
    {image: require('../../../assets/inception.jpg')},
    {image: require('../../../assets/interstellar.jpg')},
  ])

  /*
  .##........#######...######...####..######...######.
  .##.......##.....##.##....##...##..##....##.##....##
  .##.......##.....##.##.........##..##.......##......
  .##.......##.....##.##...####..##..##........######.
  .##.......##.....##.##....##...##..##.............##
  .##.......##.....##.##....##...##..##....##.##....##
  .########..#######...######...####..######...######.
  */

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  /*
  ..######...#######..##.....##.########...#######..##....##.########.##....##.########..######.
  .##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##....##....##
  .##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##....##......
  .##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##.....######.
  .##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##..........##
  .##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##....##....##
  ..######...#######..##.....##.##.........#######..##....##.########.##....##....##.....######.
  */

  const renderMainView = () => {
    return (
      <View style={styles.container}>
        {renderComponents()}
        {renderFlatListView()}
        {renderApiCallFlatListView()}
      </View>
    );
  };

  const renderComponents = () => {
    // console.warn('render', data);
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text>Home</Text>
        </TouchableOpacity>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cardView}>
            <Text>Card</Text>
          </View>
          <View style={[styles.cardView, {backgroundColor: 'gold'}]}>
            <Text>Card</Text>
          </View>
          <View
            style={[
              styles.cardView,
              {backgroundColor: 'silver', marginRight: 20},
            ]}>
            <Text>Card</Text>
          </View>
        </ScrollView>
        <View style={styles.stateView}>
          <TouchableOpacity onPress={increase} style={styles.increaseView}>
            <Text>Increse State</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{count}</Text>
          <TouchableOpacity onPress={decrease} style={styles.increaseView}>
            <Text>Decrese State</Text>
          </TouchableOpacity>
        </View>
        {/* <FlatList
          data={name}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile', {name: item.name, email: item.email})}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        /> */}
      </View>
    );
  };

  const renderFlatListView = () => {
    return (
      <FlatList
        data={name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.flatCardView}>
              <Image source={item.image} style={styles.imgView} />
              <View style={styles.flatText}>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>
            </View>
          );
        }}
      />
    );
  };

  const renderApiCallFlatListView = () => {
    if (data !== null) {
      return (
        <FlatList
          data={data.data.movies,image}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            console.log('item', item);
            return (
              <View>
                <Image source={item.image} style={styles.movieImage}/>
                <View style={styles.movieCardView}>
                  <Text>
                    {item.title},{item.releaseYear}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      );
    } else {
      return <ActivityIndicator />;
    }
  };

  return renderMainView();
};

export default Home;

// let obj = {
//   image,
//   respJson
// } 
// data={data.data.image}