import React from "react";
import { Text, View } from "react-native";
// import Icon from "./Icon";
import IconFontAwesome from "./IconFontAwesome";
import styles, { DARK_GRAY, PRIMARY_COLOR } from "../assets/styles";
import { TabBarIconT } from "../types";

const TabBarIcon = ({ focused, iconName, text }: TabBarIconT) => {
  const iconFocused = focused ? PRIMARY_COLOR : DARK_GRAY;

  return (
    <View style={styles.iconMenu}>
      <IconFontAwesome name={iconName} size={16} color={iconFocused} />
      {/* <Icon name={iconName} size={16} color={iconFocused} /> */}
      {/* <Text style={[styles.tabButtonText, { color: iconFocused }]}>{text}</Text> */}
    </View>
  );
};

export default TabBarIcon;
