import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class Api extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getapiData();
  }

  async getapiData() {
    let resp = await axios.get('https://reactnative.dev/movies.json');
    console.log(resp.data.movies);
    this.setState({data: resp.data.movies});
  }

  render() {
    return (
      <View>
        {this.state.data.length > 0 ? (
          <View>
            {this.state.data.map((item) => (
              <Text>{item.title},{item.releaseYear}</Text>
            ))}
          </View>
            ) : (
            <Text>data is loading...</Text>
        )}
      </View>
    );
  }
}

export default Api;
