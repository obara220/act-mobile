import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import Background from "@/components/Background";
import Logo from "@/components/Logo";
import Header from "@/components/Header";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { useRouter } from 'expo-router';

export default function FlightNumberScreen({ navigation }: any) {
  const [flightNumber, setFlightNumber] = useState({ value: "", error: "" });
  const colorScheme = useColorScheme();
  const router = useRouter();
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const onNext = () => {
    router.push('/home');
  };

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Header>CREW LOG IN</Header>
      <Text style={{ fontSize: 20, color: colors.text }}>
        Welcome back! <Text style={{ fontWeight: 600 }}>John Doe</Text>
      </Text>
      <TextInput
        type="number"
        label="Flight Number.."
        returnKeyType="next"
        value={flightNumber.value}
        onChangeText={(text: string) => setFlightNumber({ value: text, error: "" })}
        error={!!flightNumber.error}
        errorText={flightNumber.error}
        autoCapitalize="none"
        autoCompleteType="number"
        keyboardType="flight-number"
        icon="airplane"
      />
      <Button mode="contained" onPress={onNext} style={[styles.btn, { backgroundColor: colors.primary }]}>
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
  btn: {
    marginTop: 24,
  },
});
