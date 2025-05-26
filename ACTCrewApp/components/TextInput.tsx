import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import "@/global.css";

export default function TextInput({ errorText, description, icon, ...props }: any) {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return (
    <View className="w-full my-3">
      <Input
        style={{ backgroundColor: colors.bg_surface }}
        selectionColor={colors.primary}
        cursorColor={colors.primary}
        textColor={colors.text}
        outlineStyle={{ borderRadius: 8, borderWidth: 1, borderColor: colors.border }}
        underlineColor="transparent"
        mode="outlined"
        {...props}
        left={<Input.Icon icon={icon} color={colors.text} />}
      />
      {description && !errorText ? (
        <Text style={{ fontSize: 14, color: colors.text, paddingVertical: 4 }}>{description}</Text>
      ) : null}
      {errorText ? <Text style={{ fontSize: 14, color: colors.error, paddingVertical: 4 }}>{errorText}</Text> : null}
    </View>
  );
}
