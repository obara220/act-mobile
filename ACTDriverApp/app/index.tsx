import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { useRouter } from 'expo-router';


export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState({
    value: "dalingboxing25@gmail.com",
    error: "",
  });
  const [password, setPassword] = useState({ value: "Daling25", error: "" });
  const [isShowPwd, setIsShowPwd] = useState(false);
  
  const colorScheme = useColorScheme();
  const router = useRouter();
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    if (email.value !== "dalingboxing25@gmail.com") {
      setEmail({ ...email, error: "Invalid Email address." });
    } else if (password.value !== "Daling25") {
      setPassword({ ...password, error: "Invalid password" });
    } else {
      router.navigate('./confirmDriver');
    }
  };

  return (
    <Background>
      <Logo />
      <Header>DRIVER LOG IN</Header>
      <Text style={{ fontSize: 20, color: colors.text }}>Welcome back!</Text>
      <TextInput
        label="User id.."
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        icon="account-outline"
      />
      <PasswordInput
        label="Enter your password.."
        returnKeyType={isShowPwd ? "next" : "done"}
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry={!isShowPwd}
        setIsShowPwd={setIsShowPwd}
        isShowPwd={isShowPwd}
      />
      <Button mode="contained" onPress={onLoginPressed} style={[styles.btn, { backgroundColor: colors.primary }]}>
        Log in
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  btn: {
    marginTop: 24,
    width: '100%'
  },
});
