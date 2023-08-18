import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';

import { colores, styles } from '../theme/appTheme';

import { AuthContext } from '../context/AuthContext';

export const SettingScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState } = useContext(AuthContext);

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20,
    }}>
        <Text style={ styles.title }>SettingScreen</Text>

        <Text>{ JSON.stringify( authState, null, 4 ) }</Text>

        {
          authState.favoriteIcon &&
            (
              <Icon
                  name={ authState.favoriteIcon }
                  size={ 150 }
                  color={ colores.primary }
              />
            )
        }


    </View>
  );
};
