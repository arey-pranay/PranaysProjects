import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screenWrapper";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <ScreenWrapper>
      <View className="bg-[#fefdfe] h-screen flex gap-0 items-center justify-start ">
        <View className="bg-[#794482] w-full rounded-b-[100px] pt-7 mb-10">
          <Text
            style={{
              fontFamily: "DidactGothic_400Regular",
              fontSize: 40,
              fontWeight: 400,
            }}
            className="px-12 text-center mb-10 text-white"
          >
            All Set, Let's Log You In!
          </Text>
        </View>

        {/* Username Input */}
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            padding: 15,
            marginBottom: 10,
            width: 300,
          }}
        />

        {/* Password Input */}
        <TextInput
          className="mb-10"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            padding: 15,
            // marginVertical: 20,
            marginTop: 10,
            width: 300,
          }}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: "#BA68C8",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 0,
            paddingVertical: 12,
            paddingHorizontal: 100,
          }}
        >
          <Text
            style={{
              fontFamily: "DidactGothic_400Regular",
              fontSize: 20,
              color: "white",
            }}
          >
            Login
          </Text>
          <Image
            source={require("../assets/icns/pngs/Right.png")}
            style={{ height: 20, width: 20, marginLeft: 5 }}
          />
        </TouchableOpacity>
        <View>
          <Image
            source={require("../assets/images/Login-amico.png")}
            className="w-80 h-80 mt-12"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
