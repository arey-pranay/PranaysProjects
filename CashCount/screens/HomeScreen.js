import { View, Text } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <View className="">
        <Text
          style={{
            fontFamily: "DidactGothic_400Regular",
            fontSize: 40,
            fontWeight: 400,
          }}
        >
          Welcome to
        </Text>

        <Text
          style={{
            fontFamily: "DidactGothic_400Regular",
            fontSize: 40,
            fontWeight: 600,
            // fontWeight: 800,
          }}
          className="text-[#794482]"
        >
          CashCount
        </Text>
      </View>
    </ScreenWrapper>
  );
}
