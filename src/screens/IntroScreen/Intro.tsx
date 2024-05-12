import React from "react";
import { View, StyleSheet } from "react-native";

export const IntroScreen = () => {
  return (
    <View style={styles.container}>
      {/* 加载页 */}
      loading...
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
