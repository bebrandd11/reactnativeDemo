import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Relative path
import {styles} from './style';

const Login = (props) => {
    const navigation = useNavigation();

  // const [state, setState] = useState([
  //   {title: 'some'}
  // ]);
//   const data = 'the another data';

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [add, setAdd] = useState('');

  const login = () => {
    alert('login here');
  };

  const submit = () => {
    console.log('name', name);
    console.log('pass', pass);
    console.log('add', add);
  };

  const renderMainView = () => {
    return <View style={styles.renderContainer}>{renderComponents()}</View>;
  };

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

  const renderComponents = () => {
    return (
      <View style={styles.container}>
        {/* <Login data={data} /> */}
        <TouchableOpacity onPress={login}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="enter name"
          value={name}
          onChangeText={(txt) => setName(txt)}
          style={styles.inputView}
        />
        <TextInput
          placeholder="enter password"
          value={pass}
          onChangeText={(txt) => setPass(txt)}
          style={styles.inputView}
        />
        <TextInput
          placeholder="enter address"
          value={add}
          onChangeText={(txt) => setAdd(txt)}
          style={styles.inputView}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate('bottombar', submit())}}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupText} onPress={() => {navigation.navigate('Signup')}}>
          <Text>Create new ? Signup</Text>
        </TouchableOpacity>
      </View>
      //   <View style={styles.container}>
      //     <Text>Login Screen {props.data}</Text>
      //   </View>
    );
  };

  return renderMainView();
};

export default Login;

// onPress={() => submit()}