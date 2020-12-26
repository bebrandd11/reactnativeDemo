import React from 'react';

//import screens
import MyTabs from './src/components/MyTabs/MyTabs';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <MyTabs />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
