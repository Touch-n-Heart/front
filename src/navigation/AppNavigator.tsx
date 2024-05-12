import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator, IntroStackScreen } from './StoneNavigator';

export const AppNavigator = () => {
  // 判断用户是否第一次登录 暂时手动修改查看效果
  const [isFirstOpen, setIsFirstOpen] = useState(false)

  return (
    <NavigationContainer>
      {/* <IntroStackScreen /> */}
      {!isFirstOpen && <TabNavigator />}
      {isFirstOpen && <IntroStackScreen />}
    </NavigationContainer>
  );
}