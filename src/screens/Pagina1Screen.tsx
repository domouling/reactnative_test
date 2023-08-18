/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { colores, styles } from '../theme/appTheme';

//interface Props extends StackScreenProps<any,any> {}
interface Props extends DrawerScreenProps<any,any> {}

export const Pagina1Screen = ( { navigation }: Props ) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={ () => navigation.toggleDrawer() }
        >
          <Icon name="menu-outline" size={30} color={ colores.primary } />
        </TouchableOpacity>
      ),
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Pagina1 Screen</Text>

        <Button
          title="Ir a Pagina2"
          onPress={ () => navigation.navigate('Pagina2Screen') }
        />

        <Text style={{
          marginVertical: 20,
          fontSize: 20,
          marginLeft: 5,
        }}>
          Navegar con argumentos
        </Text>

        <View style={{
          flexDirection: 'row',
        }}>
          <TouchableOpacity
            style={{
              ...styles.botonGrande,
              backgroundColor: '#5856D6',
            }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            }) }
          >
            <Icon name="accessibility-outline" size={35} color="white" />
            <Text style={ styles.botonGrandeTexto }>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.botonGrande,
              backgroundColor: '#FF9427',
            }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            }) }
          >
            <Icon name="woman-outline" size={35} color="white" />
            <Text style={ styles.botonGrandeTexto }>Maria</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
};
