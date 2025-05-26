import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import "@/global.css";

export default function Background({ children }: any) {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return (
    <ImageBackground
      source={require("@/assets/images/items/dot.png")}
      resizeMode="repeat"
      className={`flex flex-1 w-full bg-[${colors.bg_surface}]`}
    >
      <KeyboardAvoidingView className={`flex flex-1 w-full p-5 max-w-[340px] items-center justify-center self-center tracking-normal color-[${colors.text}]`} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
