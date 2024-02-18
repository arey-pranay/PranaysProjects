import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
// import { Text, View } from "react-native";
import AppNavigation from "./navigation/appNavigation";
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  useFonts,
  DidactGothic_400Regular,
} from "@expo-google-fonts/didact-gothic";
export default function App() {
  let [fontsLoaded] = useFonts({
    DidactGothic_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AppNavigation />
    // <View className="flex-1 items-center justify-center bg-green-500 ">
    //   <Text>Open up App.js to Tailwind working</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}
