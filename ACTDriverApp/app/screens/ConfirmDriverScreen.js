import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import { theme } from "../core/theme";

export default function ConfirmDriverScreen({ navigation }) {
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
      <Header>DRIVER LOG IN</Header>
      <View style={styles.driverInfo}>
        <Image
          source={require("../../assets/items/avatar.png")}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Joseph Smith</Text>
          <Text style={{ fontSize: 14 }}>Driver 0510</Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 18,
          width: "100%",
          textAlign: "center",
          marginTop: 24,
        }}
      >
        Is this You?
      </Text>
      <View style={styles.row}>
        <Button mode="contained" onPress={onNext} style={styles.btn}>
          Yes
        </Button>
        <Button mode="contained" onPress={onNext} style={styles.btn}>
          No
        </Button>
      </View>
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
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 4,
  },
  btn: {
    marginTop: 24,
    width: "auto",
    paddingVertical: 0,
    borderRadius: 8,
  },
  driverInfo: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginTop: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: "solid",
    gap: 4,
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 88,
  },
  image: {
    width: 60,
    height: 60,
  },
  info: {
    height: "100%",
    justifyContent: "center",
    marginLeft: 8,
  },
});
