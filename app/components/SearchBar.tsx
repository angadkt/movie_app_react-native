import { View, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeHolder: string;
  onPress?: () => void;
}

const SearchBar = ({placeHolder, onPress} : Props) => {
  return (
    <View  className="flex-row  bg-dark-200 items-center  rounded-full px-5 py-4">
      <Image
        source={icons.search}
      
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8ff"
      />
      <TextInput
       className="flex-1 ml-4 text-white"
        onPress={onPress}
        onChangeText={() => {}}
        placeholder={placeHolder}
        value=""
        placeholderTextColor="#a8b5db"
      />
    </View>
  );
};

export default SearchBar;
