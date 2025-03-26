import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";

export default function FlightNumberScreen({ navigation }) {
  const [flightNumber, setFlightNumber] = useState({ value: "", error: "" });

  const onNext = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeScreen" }],
    });
  };

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Header>CREW LOG IN</Header>
      <Text style={styles.welcome}>
        Welcome back! <b>John Doe</b>
      </Text>
      <TextInput
        type="number"
        label="Flight Number.."
        returnKeyType="next"
        value={flightNumber.value}
        onChangeText={(text) => setFlightNumber({ value: text, error: "" })}
        error={!!flightNumber.error}
        errorText={flightNumber.error}
        autoCapitalize="none"
        autoCompleteType="number"
        keyboardType="flight-number"
      />
      {/* <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password ?</Text>
        </TouchableOpacity>
      </View> */}
      <Button mode="contained" onPress={onNext} style={styles.btn}>
        Find
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  welcome: {
    color: theme.colors.text,
    fontSize: 20,
  },
  btn: {
    marginTop: 24,
  },
});
