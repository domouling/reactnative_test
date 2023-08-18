/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tabs1Screen } from '../screens/Tabs1Screen';
//import { Tabs2Screen } from '../screens/Tabs2Screen';
//import { Tabs3Screen } from '../screens/Tabs3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
//import { Text } from 'react-native';


export const Tabs = () => {
  return Platform.OS === 'ios'
  ? <TabsIOS />
  : <TabsAndroid />;
};



const BottomTabAndroid = createBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      //sceneAnimationEnabled={ true }
      /* tabBarStyle={{
        backgroundColor: colores.primary,
      }} */
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: colores.primary,
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
                iconName = 'bandage-outline';
            break;

            case 'TopTabNavigator':
                iconName = 'navigate-outline';
            break;

            case 'StackNavigator':
                iconName = 'bookmarks-outline';
            break;
          }
          return <Icon name={ iconName } size={20} color={ color } />;
        },
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tabs1Screen } />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
};


const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
                iconName = 'bandage-outline';
            break;

            case 'Tab2Screen':
                iconName = 'compass-outline';
            break;

            case 'StackNavigator':
                iconName = 'bookmarks-outline';
            break;
          }
          return <Icon name={ iconName } size={20} color={ color } />;
        },
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={ Tabs1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tabs1Screen } />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
};
