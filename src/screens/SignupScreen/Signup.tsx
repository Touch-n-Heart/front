import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Image } from 'react-native';
import BackgroundMask from '../../components/BackgroundMask';
import Logo from '../../components/Logo';
import { W3mButton } from '../../web3modal';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 22,
    paddingRight: 22,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 52,
  },
  signup: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 32,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 32,
    paddingBottom: 32,
  },
  title: {
    fontSize: 22,
    lineHeight: 1.6,
    fontWeight: '800',
    Font: 'Rubik',
    marginBottom: 32,
  },
  wallet: {
    backgroundColor: '#E940578A',
    height: 60,
    marginTop: 42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 999,
    paddingLeft: 12,
    paddingRight: 12,
  },
  // email: {
  //   backgroundColor: '#E940572E',
  //   height: 60,
  //   marginTop: 42,
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  //   borderRadius: 12,
  // },
  // btnIcon: {
  //   width: 45,
  //   height: 45,
  // },
  btnLabel: {
    fontSize: 28,
    lineHeight: 1.6,
    fontFamily: 'Mulish',
    color: 'rgb(255 251 242)',
  },
});

export default function LauchScreen() {
  return (
    <BackgroundMask>
      <View style={styles.container}>
        <Logo.Icon />
        <View style={styles.signup}>
          <Text style={styles.title}>Connect Wallet</Text>
          {/* <View style={styles.wallet}> */}
          {/* <Image
              style={styles.btnIcon}
              source={{
                uri: 'https://ipfs.io/ipfs/QmX4dn8DJtdiuCmi4pRW2JRkTacNfXVYLBHqPQimUQSokF',
              }}
              accessibilityIgnoresInvertColors
            /> */}
          {/* <Text style={styles.btnLabel}>continue with Wallet</Text> */}
          {/* </View> */}
          <W3mButton />
          {/* <View style={styles.email}>
            <Image
              style={styles.btnIcon}
              source={{
                uri: 'https://ipfs.io/ipfs/QmTzGJxZBpCjkq1MAe52XmUpZC1JJp3kWqnL4VLdqiQPnd',
              }}
              accessibilityIgnoresInvertColors
            />
            <Text style={styles.btnLabel}>continue with Email</Text>
          </View> */}
        </View>
      </View>
    </BackgroundMask>
  );
}
