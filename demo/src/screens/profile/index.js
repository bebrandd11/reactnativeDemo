import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Modal,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import {styles} from './style';
import Product from '../product';
import Api from '../api';

const Profile = () => {
  const navigation = useNavigation();

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => setLoader(null), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [count, setCount] = useState(0);
  const [data, setData] = useState('No data');

  useEffect(() => {
    if (count == 5) {
      setData('New data is filled up');
    }
  });

  const [show, setShow] = useState(false);

//   const [apiData, setApiData] = useState();
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     //   getapiData()
//     fetch('https://reactnative.dev/movies.json')
//       .then((response) => response.json())
//       .then((json) => setApiData(json.movies))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   const getapiData = async () => {
//     let resp = await axios.get('https://reactnative.dev/movies.json')
//     console.log(resp.data.movies);
//     // setApiData({data: resp.data.movies})
// }

  /*
  .##........#######...######...####..######...######.
  .##.......##.....##.##....##...##..##....##.##....##
  .##.......##.....##.##.........##..##.......##......
  .##.......##.....##.##...####..##..##........######.
  .##.......##.....##.##....##...##..##.............##
  .##.......##.....##.##....##...##..##....##.##....##
  .########..#######...######...####..######...######.
  */

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
        {renderModal()}
        {/* {renderfetchApi()} */}
      </View>
    );
  };

  const renderComponents = () => {
    return (
      <View>
          <Api />
        {loader ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text>Profile Screen</Text>
          </TouchableOpacity>
        )}
        <Text style={{textAlign: 'center'}}>{count}</Text>
        <Product data={data} />
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={styles.stateBtn}>
          <Text>Update State</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderModal = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.stateBtn}
          onPress={() => {
            setShow(true);
          }}>
          <Text>show modal</Text>
        </TouchableOpacity>
        <Modal visible={show} transparent={true}>
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View
              style={{
                margin: 50,
                backgroundColor: '#ffffff',
                flex: 1,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 60}}>Modal Text</Text>
              <TouchableOpacity
                style={styles.stateBtn}
                onPress={() => {
                  setShow(false);
                }}>
                <Text>close modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

//   const renderfetchApi = () => {
//     return (
//       <View>
//         {isLoading ? (
//           <ActivityIndicator size="large" color="#00ff00" />
//         ) : (
//           <FlatList
//             data={apiData}
//             renderItem={({item}) => (
//               <Text>
//                 {item.title}, 
//                 {item.releaseYear}
//               </Text>
//             )}
//           />
//         )}
//       </View>
//     );
//   };

  return renderMainView();
};

export default Profile;
