// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import screens
import Login from './src/screens/login'
import Signup from './src/screens/signup'
import MyTabs from './src/components/MyTabs/MyTabs'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen 
          name="bottombar" 
          component={MyTabs} 
          options={({route}) => ({
            headerShown: false,
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;