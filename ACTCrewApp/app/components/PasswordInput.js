import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";

import { theme } from "../core/theme";

export default function PasswordInput({
  errorText,
  description,
  isShowPwd,
  setIsShowPwd,
  ...props
}) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.text}
        underlineColor="transparent"
        mode="outlined"
        {...props}
        right={
          <Input.Icon
            icon={isShowPwd ? "eye" : "eye-off"}
            onPress={() => setIsShowPwd(!isShowPwd)}
          />
        }
        left={<Input.Icon icon="lock-outline" />}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderRadius: 8,
  },
  description: {
    fontSize: 13,
    color: theme.colors.text,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});
