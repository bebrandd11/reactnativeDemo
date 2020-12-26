import React from 'react';

//Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import screens
import HomeScreen from '../../screens/home';
import Settings from '../../screens/settings';
import ProfileScreen from '../../screens/profile';
import MyDrawer from '../MyDrawer/MyDrawer';
import LocationScreen from '../../screens/location';

//Icon Path
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const ACTIVE_TAB_COLOR = '#284AAD';
const INACTIVE_TAB_COLOR = '#1C1A2E';


const MyTabs = () => {
  return (
    <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{
            keyboardHidesTabBar: true,
            activeBackgroundColor: '#6AAFE6',
            inactiveBackgroundColor: '#CADBE9',
            style: {
                height: 65,
                // paddingTop: 16,
            },
            labelStyle: {
                fontSize: 14,
                marginVertical: 5,
            },
        }}    
    >
      <Tab.Screen
        name="Home"
        component={MyDrawer}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              size={30}
              style={{paddingTop: 8}}
              focused={focused}
              color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="settings-sharp"
                size={30}
                style={{paddingTop: 8}}
                focused={focused}
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
              />
            ),
          }}
        />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="profile"
                size={30}
                style={{paddingTop: 8}}
                focused={focused}
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
              />
            ),
          }}
        />
      <Tab.Screen 
        name="Location" 
        component={LocationScreen} 
        options={{
            tabBarLabel: 'Location',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="md-location-sharp"
                size={30}
                style={{paddingTop: 8}}
                focused={focused}
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
              />
            ),
          }}
        />
    </Tab.Navigator>
  );
};

export default MyTabs;
