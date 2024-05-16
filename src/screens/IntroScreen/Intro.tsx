import React from 'react';
import { StyleSheet, View } from 'react-native';
import BackgroundMask from '../../components/BackgroundMask';
import Logo from '../../components/Logo';

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

const WebSplashScreen = () => {
  return (
    <BackgroundMask>
      <View style={styles.content}>
        <Logo />
      </View>
    </BackgroundMask>
  );
};

export default WebSplashScreen;
