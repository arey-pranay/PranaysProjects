import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";

export default function Welcome3() {
  return (
    <ScreenWrapper>
      <View className="bg-[#fefdfe] h-screen flex gap-0 items-center justify-center">
        <Text
          style={{
            fontFamily: "DidactGothic_400Regular",
            fontSize: 40,
            fontWeight: 400,
          }}
          className="px-12 text-center"
        >
          And, what is your role there ?
        </Text>

        {/* <Text
          style={{
            fontFamily: "DidactGothic_400Regular",
            fontSize: 65,
            fontWeight: 600,
            // fontWeight: 800,
          }}
          className="text-[#794482]"
        >
          Cash-Count
        </Text> */}

        <View>
          {/* <Image
            source={require("../assets/images/Saving money-amico.png")}
            className="w-80 h-80 my-24"
          /> */}
          <View className="flex flex-row gap-10 mt-8 mb-20 ">
            <TouchableOpacity>
              <View className="h-32 w-32 bg-[#E7ACF1] flex justify-center items-center rounded-2xl">
                <Image source={require("../assets/icns/pngs/Vector-3.png")} />
              </View>
              <Text className="text-center pt-4 text-2xl font-bold">Owner</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="h-32 w-32 bg-[#E7ACF1] justify-center items-center rounded-2xl">
                <Image source={require("../assets/icns/pngs/Vector-2.png")} />
              </View>
              <Text className="text-center pt-4 text-2xl font-bold">
                Employee
              </Text>
            </TouchableOpacity>
          </View>

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
              Last Step
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
