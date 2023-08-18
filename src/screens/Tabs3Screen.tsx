import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export const Tabs3Screen = () => {

  useEffect(() => {
    console.log('Tabs3Screen effect');
  }, []);

  return (
    <View>
        <Text>Tab3Screen</Text>
    </View>
  );
};
