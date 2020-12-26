import React from 'react';

//Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';

//import screens
import HomeScreen from '../../screens/home';
import Settings from '../../screens/settings';
import ProfileScreen from '../../screens/profile';
import LocationScreen from '../../screens/location';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Location" component={LocationScreen} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;