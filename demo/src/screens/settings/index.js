import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { styles } from './style';

class Settings extends Component {
  // const navigation = useNavigation();

  state = {
    invalidAddress: '',
    address: ''
  };
  // const [address, setAddress] = useState();
  // const [invalidAddress, setinvalidAddress] = useState('');

  checkAddress = (e) => {
    this.setState({address: e})
    let rjx=/^[a-zA-Z]+$/
    if(!rjx.test(e)) {
      console.log(this.state.invalidAddress);
      this.setState({invalidAddress: 'Please enter valid address'})
    } else {
      this.setState({invalidAddress: ''})
    }
  }

  submit = () => {
    if(this.state.address.length < 1) {
      alert('empty address');
    }
  }

  render() {
    console.log(this.props);
    return ( 
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Text>Settings</Text>
        </TouchableOpacity>
        <TextInput 
          maxLength={5}
          placeholder="enter name" 
          style={styles.inputView}
        />
        <TextInput 
          placeholder="enter surename" 
          style={styles.inputView}
        />
        <TextInput 
          placeholder="enter address" 
          style={styles.inputView}
          onChangeText={(e) => this.checkAddress(e) }
        />
        <TextInput 
          placeholder="enter mobileno"
          keyboardType="numeric" 
          style={styles.inputView}
        />
       <Text>{this.state.invalidAddress}</Text>
        <TouchableOpacity style={styles.submitBtn} onPress={() => this.submit()}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>   
    ) 
  }
};

export default Settings;

// {invalidAddress !== null ? <Text>{this.state.invalidAddress}</Text> :null}