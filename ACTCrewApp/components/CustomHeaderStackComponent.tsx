import React from "react";
import { View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function CustomHeaderStackComponent(props: any) {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light;

  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
      }}
    >
      <IconButton
        icon="arrow-left-thin"
        iconColor={colors.text}
        size={24}
        className="m-0"
        onPress={() => router.navigate("./home")}
      ></IconButton>
      <Button
        mode="contained"
        style={{ marginVertical: 'auto', backgroundColor: "transparent" }}
        labelStyle={{ fontSize: 14, color: colors.text }}
        onPress={() => router.navigate("./home")}
      >
        Back
      </Button>
    </View>
  );
}
