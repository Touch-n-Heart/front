import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Color
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "../assets/styles";
// Icon
import TabBarIcon from "../components/TabBarIcon";
// Intro Screens
import { IntroScreen } from "../screens/IntroScreen";
// Auth Screens
import { SignupScreen } from "../screens/SignupScreen";
// Match Screens
import { MatchScreen } from "../screens/MatchScreen";
// Playground Screens
import { PlaygroundScreen } from "../screens/PlaygroundScreen";
// Messages Screens
import { MessagesScreen } from "../screens/MessagesScreen";
// Me Screens
import { MeScreen } from "../screens/MeScreen";

// create Navigator

const IntroStack = createStackNavigator();
export const IntroStackScreen = () => (
  <IntroStack.Navigator>
    <IntroStack.Screen
      name="IntroScreen"
      component={IntroScreen}
      options={{ headerShown: false }}
    />
  </IntroStack.Navigator>
);

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
  </AuthStack.Navigator>
);

const TabStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  // <NavigationContainer>
  // <TabStack.Navigator>
  //   <TabStack.Screen
  //     name="Tab"
  //     options={{ headerShown: false, animationEnabled: false }}
  //   >
  //     {() => (
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            activeTintColor: PRIMARY_COLOR,
            inactiveTintColor: DARK_GRAY,
            labelStyle: {
              fontSize: 14,
              textTransform: "uppercase",
              paddingTop: 10,
            },
            style: {
              backgroundColor: WHITE,
              borderTopWidth: 0,
              marginBottom: 0,
              shadowOpacity: 0.05,
              shadowRadius: 10,
              shadowColor: BLACK,
              shadowOffset: { height: 0, width: 0 },
            },
          }}
        >
          <Tab.Screen
            name="Touch-n-Heart"
            component={MatchScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="heart"
                />
              ),
            }}
          />

          <Tab.Screen
            name="Playground"
            component={PlaygroundScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="th-large"
                  iconUrl=""
                />
              ),
            }}
          />

          <Tab.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="commenting"
                />
              ),
            }}
          />

          <Tab.Screen
            name="Me"
            component={MeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="user"
                />
              ),
            }}
          />
        </Tab.Navigator>
  //     )}
  //   </TabStack.Screen>
  // </TabStack.Navigator>
  // </NavigationContainer >
);

export { TabNavigator };
