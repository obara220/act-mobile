import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from '@/hooks/useColorScheme';
import "@/global.css";

export default function PasswordInput({
  errorText,
  description,
  isShowPwd,
  setIsShowPwd,
  ...props
}: any) {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return (
    <View className="w-full my-3">
      <Input
        style={{ backgroundColor: colors.bg_surface }}
        selectionColor={colors.text}
        textColor={colors.text}
        outlineStyle={{ borderRadius: 8, borderWidth: 1, borderColor: colors.border }}
        underlineColor="transparent"
        mode="outlined"
        {...props}
        right={
          <Input.Icon
            icon={isShowPwd ? "eye" : "eye-off"}
            onPress={() => setIsShowPwd(!isShowPwd)}
            rippleColor={colors.text}
          />
        }
        left={<Input.Icon icon="lock-outline" color={colors.text} />}
      />
      {description && !errorText ? (
        <Text style={{ fontSize: 14, color: colors.text, paddingVertical: 4 }}>{description}</Text>
      ) : null}
      {errorText ? <Text style={{ fontSize: 14, color: colors.error, paddingVertical: 4 }}>{errorText}</Text> : null}
    </View>
  );
}
