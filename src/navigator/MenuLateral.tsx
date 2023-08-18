/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
//import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'left',
                drawerType: width >= 720 ? 'permanent' : 'front',
                headerShown: false,
            }}
            drawerContent={ (props) => <MenuInterno {...props} /> }
        >
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        </Drawer.Navigator>
    );
};


const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
    return (
        <DrawerContentScrollView>

            {/* Parte del Avatar */}
            <View style={ styles.avatarContainer }>
                <Image
                    source={{
                        uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder-293x300.png',
                    }}
                    style={ styles.avatar }
                />
            </View>

            {/* Menu opciones */}
            <View style={ styles.menuContainer }>
                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row',
                    }}
                    onPress={ () => navigation.navigate('Tabs') }
                >
                    <Icon name="compass-outline" size={23} color="black" />
                    <Text style={ styles.menuTexto }> Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row',
                    }}
                    onPress={ () => navigation.navigate('SettingScreen') }
                >
                    <Icon name="cog-outline" size={23} color="black" />
                    <Text style={ styles.menuTexto }> Ajustes</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
};
