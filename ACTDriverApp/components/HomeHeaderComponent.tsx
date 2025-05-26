import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function HomeHeaderComponent(props: any) {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        minHeight: 120,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: 'white',
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
      }}
    >
      <DrawerToggleButton {...props} />
      <View>
        <Text style={{ fontSize: 18 }}>Welcome <Text style={{ fontWeight: 600 }}>Jhon Doe</Text></Text>
        <Text style={{fontSize: 15, marginTop: 4 }}>Your transportation details at a glance.</Text>
      </View>
    </View>
  );
}
