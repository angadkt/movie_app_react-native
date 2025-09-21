import {
  View,
  Text,
  Image,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

// this TabIcon component is used to render the icon for each tab in the bottom tab navigator.
// it is a reusable component that can be used for all the tabs.

type TableIconProps = {
  focused?: boolean;
  icon: ImageSourcePropType;
  background: ImageSourcePropType;
};
const TabIcon: React.FC<TableIconProps> = ({ icon, background }) => {
  return (
    <ImageBackground
      source={background}
      className="w-16 h-9  rounded-full    justify-center items-center"
      resizeMode="cover"
    >
      <Image source={icon} tintColor="#151312" className="size-5" />
    </ImageBackground>
  );
};

const _layout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel:false,
      tabBarItemStyle :{
        width: '100%',
        height: '100%',
        // display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',

      },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 52,
          position: "absolute",
          borderWidth: 1,
          borderColor: "#0f0d23",
          display:"flex",
          justifyContent: "center", 
          alignItems: "flex-end",
          // remove overflow: hidden unless you really need clipping
        },
        }} 
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Profile",
          
          
          tabBarIcon: ({ focused }) => (
            <View className="  items-center justify-center  h-14 w-20 ">
              {focused ? (
                <TabIcon icon={icons.home} background={images.highlight} />
              ) : (
                <>
                 <Image
                  source={icons.home}
                  tintColor="#999"
                  className="size-5 justify-center items-center"
                />
                  <Text className="text-xs ">Home</Text>
                </>
              )}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            <View className=" items-center justify-center  h-14 w-20  ">
              {focused ? (
                <TabIcon icon={icons.search} background={images.highlight} />
              ) : (
                <>
                 <Image
                  source={icons.search}
                  tintColor="#999"
                  className="size-5 justify-center items-center"
                />
                  <Text className="text-xs ">Search</Text>
                </>
              )}
            </View>
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
           <View className=" items-center justify-center h-14 w-20 ">
              {focused ? (
                <TabIcon icon={icons.save} background={images.highlight} />
              ) : (
                <>
                 <Image
                  source={icons.save}
                  tintColor="#999"
                  className="size-5 justify-center items-center"
                />
                  <Text className="text-xs ">Saved</Text>
                </>
              )}
            </View>
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            <View className=" items-center justify-center  h-14 w-20 ">
              {focused ? (
                <TabIcon icon={icons.person} background={images.highlight} />
              ) : (
                <>
                 <Image
                  source={icons.person} 
                  tintColor="#999"
                  className="size-5 justify-center items-center"
                />
                  <Text className="text-xs ">Profile</Text>
                </>
              )}
            </View>
        }}
      />
    </Tabs>
  );
};

export default _layout;
