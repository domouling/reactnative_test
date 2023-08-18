/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
//import { StackScreenProps } from '@react-navigation/stack';

//interface Props extends StackScreenProps<any,any> {}

//export const Pagina2Screen = ( { navigation }: Props ) => {
export const Pagina2Screen = ( ) => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Pagina2 Screen</Text>

        <Button
          title="Ir pagina 3"
          //onPress={() => navigation.navigate('Pagina3Screen') }
          onPress={() => navigator.navigate('Pagina3Screen') }
        />
    </View>
  );
};
