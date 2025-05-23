import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const _layout = () => {
  const TabIcon = ({ icon, title, focused }: any) => {
    if (focused) {
      return (
        <ImageBackground
          source={images.highlight}
          className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden gap-2"
        >
          <Image source={icon} tintColor={"#151312"} className="size-5" />

          <Text className="text-secondary text-base font-semibold ">
            {title}
          </Text>
        </ImageBackground>
      );
    }
    else{
      return (
        <View className="size-full justify-center items-center mt-4 rounded-full">
          <Image source={icon} tintColor={"#a8b5db"} className="size-5"/>
        </View>
      )
    }
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel:false,
        tabBarItemStyle:{
          width:"100%",
          height:"100%",
          justifyContent:"center",
          alignItems:"center",
        },
        tabBarStyle:{
          backgroundColor:"#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow:"hidden",
          borderWidth:1,
          borderColor:"#ofod23"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} title="Home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.person} title="Profile" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.save} title="Saved" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} title="Search" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
