import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({
    value: "dalingboxing25@gmail.com",
    error: "",
  });
  const [password, setPassword] = useState({ value: "Daling25", error: "" });
  const [isShowPwd, setIsShowPwd] = useState(false);

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
      navigation.reset({
        index: 0,
        routes: [{ name: "FlightNumberScreen" }],
      });
    }
  };

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Header>CREW LOG IN</Header>
      <Text style={styles.welcome}>Welcome back!</Text>
      <TextInput
        label="User id.."
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <PasswordInput
        label="Enter your password.."
        returnKeyType={isShowPwd ? "next" : "done"}
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry={!isShowPwd}
        setIsShowPwd={setIsShowPwd}
        isShowPwd={isShowPwd}
      />
      {/* <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password ?</Text>
        </TouchableOpacity>
      </View> */}
      <Button mode="contained" onPress={onLoginPressed} style={styles.btn}>
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
  forgot: {
    fontSize: 16,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  welcome: {
    color: theme.colors.text,
    fontSize: 20,
  },
  btn: {
    marginTop: 24,
  },
});
