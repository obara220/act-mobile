import React from "react";
import { Image, StyleSheet } from "react-native";
import "@/global.css";

export default function Logo() {
  return (
    <Image
      source={require("@/assets/images/items/logo.png")}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 212,
    height: 66,
    marginBottom: 8,
  },
});
