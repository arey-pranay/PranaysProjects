import React, { Component } from "react";
import { Text, View } from "react-native";

export default class DetailsScreen extends Component {
  render() {
    return (
      <View className="bg-red-300 flex justify-center items-center text-blue-400 h-full w-4/5">
        <Text> textInComponent </Text>
      </View>
    );
  }
}
