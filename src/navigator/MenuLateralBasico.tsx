import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'left',
                drawerType: width >= 720 ? 'permanent' : 'front',
            }}
        >
        <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
        <Drawer.Screen name="SettingScreen" options={{ title: 'Settings' }} component={SettingScreen} />
        </Drawer.Navigator>
    );
};
