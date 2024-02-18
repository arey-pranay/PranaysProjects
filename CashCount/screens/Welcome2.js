import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Button,
  Image,
} from "react-native";
import ScreenWrapper from "../components/screenWrapper";

const Welcome2 = () => {
  const options = ["Gaurav Medicals", "Hardbit Computers", "RR Agencies"];
  const [isVisible, setIsVisible] = useState(false);

  const handleSelectOption = (option) => {
    console.log("Selected:", option);
    toggleModal();
  };

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <ScreenWrapper>
      <View className="flex h-screen justify-start items-center bg-[#fefdfe]">
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // paddingHorizontal: 10,
          }}
        >
          <View />
        </View>
        <View className="bg-[#794482] w-full mb-16 rounded-b-[120px]">
          <Text
            style={{
              fontFamily: "DidactGothic_400Regular",
              fontSize: 40,
              fontWeight: 600,
            }}
            className="text-center px-10 py-10 text-white"
          >
            So, where do you work at ?
          </Text>
        </View>

        {/* <Text
          style={{
            fontFamily: "DidactGothic_400Regular",
            fontSize: 60,
            fontWeight: 600,
            // fontWeight: 800,
          }}
          className="text-[#794482]"
        >
          your shop ?
        </Text> */}
        <View className=" border-4 border-[#794482] p-2 mb-12">
          <Image
            source={require("../assets/images/a.png")}
            className="w-80 h-40 "
          />
        </View>
        <TouchableOpacity
          onPress={toggleModal}
          style={{ alignItems: "center" }}
        >
          <View className="border-2 items-center flex flex-row justify-between rounded-lg w-80 mb-12  py-2 px-4 border-[#794482]">
            <Text className="text-xl">Select Your Shop</Text>
            <Image
              source={require("../assets/icns/pngs/Vector.png")}
              className="w-4 h-4"
            />
          </View>
        </TouchableOpacity>

        <Modal visible={isVisible} animationType="slide" transparent={true}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "rgba(70, 12, 70, 0.1)",
              justifyContent: "flex-end",
            }}
            className="h-min"
            onPress={toggleModal}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <FlatList
                data={options}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => handleSelectOption(item)}
                    style={{ paddingVertical: 10, paddingHorizontal: 20 }}
                    className=" border-t border-white  rounded-4xl bg-[#794482]"
                  >
                    <Text
                      className="my-2 text-lg text-center text-white"
                      style={{ fontFamily: "DidactGothic_400Regular" }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.toString()}
              />
              {/* <TouchableOpacity
              onPress={toggleModal}
              style={{ alignItems: "center", paddingVertical: 10 }}
            >
              <Text>Close</Text>
            </TouchableOpacity> */}
            </View>
          </TouchableOpacity>
        </Modal>
        {/* <TouchableOpacity
        title="Submit"
        onPress={() => console.log("Submit button pressed")}
        style={{
          backgroundColor: "#BA68C8",
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          paddingHorizontal: 10,
        }}
        className="py-3 shadow-lg"
      >
        <Text
          style={{
            // fontFamily: "DidactGothic_400Regular",
            fontSize: 20,
            color: "white", // Assuming you want the text to be white
            // fontWeight: 600,
          }}
        >
          Let&apos;s Proceed
        </Text>
        <Image
          source={require("../assets/icns/pngs/Right.png")}
          style={{ height: 20, width: 20 }} // Adjust the height and width as needed
        />
      </TouchableOpacity> */}
      </View>
    </ScreenWrapper>
  );
};

export default Welcome2;
