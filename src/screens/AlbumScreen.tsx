import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumScreen = () => {

  const { logout, authState: { isLoggedIn } } = useContext(AuthContext);

  return (
    <View style = { styles.globalMargin }>
        <Text style = { styles.title }>Album Screen</Text>
        {
          isLoggedIn && (
            <Button
              title="Logout"
              onPress={ logout }
            />
          )
        }
    </View>
  );
};
