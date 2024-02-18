import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";

export default function Welcome1() {
  return (
    <ScreenWrapper>
      <View className="bg-[#fefdfe] h-screen flex gap-0 items-center justify-center">
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
            fontSize: 65,
            fontWeight: 600,
            // fontWeight: 800,
          }}
          className="text-[#794482]"
        >
          Cash-Count
        </Text>

        <View>
          <Image
            source={require("../assets/images/Saving money-amico.png")}
            className="w-80 h-80 my-24"
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#BA68C8",
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
            className="py-3 shadow-lg"
          >
            <Text
              style={{
                fontFamily: "DidactGothic_400Regular",
                fontSize: 20,
                color: "white", // Assuming you want the text to be white
                // fontWeight: 600,
              }}
            >
              Get Started
            </Text>
            <Image
              source={require("../assets/icns/pngs/Right.png")}
              style={{ height: 20, width: 20 }} // Adjust the height and width as needed
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
