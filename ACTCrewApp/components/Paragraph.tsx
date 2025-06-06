import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import "@/global.css";

export default function Paragraph(props: any) {
  return <Text style={styles.text} {...props} />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
  },
});
