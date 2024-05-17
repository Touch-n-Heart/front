import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator, IntroStackScreen } from './StoneNavigator';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import WebSplashScreen from '../screens/IntroScreen/Intro';
import LauchScreen from '../screens/SignupScreen/Signup';

const TOKEN_KEY = 'TOUCH_APP_TOKEN';

export const AppNavigator = () => {
  // 判断用户是否第一次登录 具体逻辑待完善 暂时手动修改查看效果
  // const [isFirstOpen, setIsFirstOpen] = useState(false)
  const [appIsReady, setAppIsReady] = useState(false);
  const [root, setRoot] = useState<string>();
  const laterSetAppIsReady = (appIsReady: boolean) => {
    setTimeout(() => {
      setAppIsReady(appIsReady);
    }, 800);
  };

  const getUserInfo = () => {
    return Promise.reject()
      .then(() => {
        setRoot('Home'); // 主页
        return;
      })
      .catch(() => {
        setRoot('Launch'); // 登录页
      })
      .finally(() => {
        laterSetAppIsReady(true);
      });
  };

  /**
   * 选择初始页面
   */
  const chooseScreen = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (token && token.length > 0) {
      await getUserInfo();
    } else {
      setRoot('Launch'); // 登录页
    }
  };

  useEffect(() => {
    async function prepare() {
      // run all the init stuff
      await chooseScreen();
      // Tell the application to render
      laterSetAppIsReady(true);
      // hide splash screen
      await SplashScreen.hideAsync();
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    prepare();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // check if app is ready
  if (!appIsReady) {
    // check if we are in web
    if (Platform.OS === 'web') {
      return <WebSplashScreen />;
    } else {
      return null;
    }
  }

  return (
    <NavigationContainer>
      {/* {!isFirstOpen && <TabNavigator />}
      {isFirstOpen && <IntroStackScreen />} */}
      {root === 'Launch' ? <LauchScreen /> : <TabNavigator />}
    </NavigationContainer>
  );
}