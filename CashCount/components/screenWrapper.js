import { View, Text, StatusBar, Platform } from "react-native";
import React from "react";

export default function ScreenWrapper({ children }) {
  let statusHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : Platform.OS == "ios"
    ? 30
    : 0;
  return (
    <View style={{ paddingTop: 0 }}>
      <View style={{ height: statusHeight, backgroundColor: "#794482" }}></View>
      {children}
    </View>
  );
}
