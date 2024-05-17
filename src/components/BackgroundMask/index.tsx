import React from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

const vw = Dimensions.get('window').width / 100;
// const vh = Dimensions.get('window').height / 100;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  imageTopGrad: {
    position: 'absolute',
    width: 140 * vw,
    height: 140 * vw,
    top: -20 * vw,
    left: -20 * vw,
    zIndex: -1,
    transform: [{ rotate: '45deg' }],
  },
  imageBottomGrad: {
    position: 'absolute',
    width: 140 * vw,
    height: 140 * vw,
    left: 20 * vw,
    top: 100 * vw,
    zIndex: -2,
    transform: [{ rotate: '-45deg' }],
  },
  // bg: {
  //   flex: 1,
  //   resizeMode: 'cover',
  //   width: 100 * vw,
  //   height: 100 * vh,
  //   position: 'absolute',
  //   zIndex: 0,
  //   left: 0,
  //   top: 0,
  // },
});

const BackgroundMask = ({ children }: { children?: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      {/* <LinearGradient colors={['#F4FDFF', '#FFFEF8']} style={styles.bg} /> */}
      <Image
        source={{
          uri: 'https://ipfs.io/ipfs/QmchHSFMmj6eH27iGKk6XiN7WnXD2kCZuABXN61C2coBX9',
        }}
        style={styles.imageTopGrad}
        accessibilityIgnoresInvertColors
      />
      <Image
        source={{
          uri: 'https://ipfs.io/ipfs/QmbM3U4xhwz3HkEW9ERdq8j3wDhBqHhoTAoza7UbaL8zJr',
        }}
        style={styles.imageBottomGrad}
        accessibilityIgnoresInvertColors
      />
      {children}
    </View>
  );
};

export default BackgroundMask;
