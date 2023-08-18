/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';

import { LogBox, Text } from 'react-native';
import { colores } from '../theme/appTheme';
LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{ paddingTop }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({route}) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary,
                },
                tabBarStyle: {
                    shadowColor: 'transparent',
                    elevation: 0,
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                      case 'Chat' :
                          iconName = 'chatbox-ellipses-outline';
                      break;

                      case 'Contact' :
                          iconName = 'people-outline';
                      break;

                      case 'Album' :
                          iconName = 'albums-outline';
                      break;
                    }
                    return <Icon name={ iconName } size={20} color={ color } />;
                },
            })}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contact" component={ContactScreen} />
            <Tab.Screen name="Album" component={AlbumScreen} />
        </Tab.Navigator>
    );
};
