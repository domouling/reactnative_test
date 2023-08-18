import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export const Tabs2Screen = () => {

  useEffect(() => {
    console.log('Tabs2Screen effect');
  }, []);


  return (
    <View>
        <Text>Tab2Screen</Text>
    </View>
  );
};
