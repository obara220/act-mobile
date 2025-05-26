import React from "react";
import { Text } from "react-native-paper";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

export default function Header(props: any) {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return <Text style={{ fontSize: 36, color: colors.header, fontWeight: 700, paddingVertical: 12 }} {...props} />;
}
