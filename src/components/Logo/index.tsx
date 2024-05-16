import React from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

const vw = Dimensions.get('window').width / 100;
// const vh = Dimensions.get('window').height / 100;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  imageIcon: { width: 132, height: 132 },
  imageTitle: { width: 302, height: 70, marginTop: 58 },
});

const LogoIcon = () => {
  return (
    <Image
      source={{
        uri: 'https://ipfs.io/ipfs/QmThJp7gR6q1JR9Vx5jxx8DkX7oyD3MrnC9hE4KubUrd7Y',
      }}
      style={styles.imageIcon}
      accessibilityIgnoresInvertColors
    />
  );
};

const LogoTitle = () => {
  return (
    <Image
      source={{
        uri: 'https://ipfs.io/ipfs/QmbpitkAfAcBZkaEZw9dp4Jr1G1FZGzCwcTkG1K1i4TPDT',
      }}
      style={styles.imageTitle}
      accessibilityIgnoresInvertColors
    />
  );
};

const Logo = () => {
  return (
    <View style={styles.container}>
      <LogoIcon />
      <LogoTitle />
    </View>
  );
};

Logo.Icon = LogoIcon;
Logo.Title = LogoTitle;

export default Logo;
