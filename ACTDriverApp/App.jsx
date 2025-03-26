import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "./app/core/theme";
import {
  StartScreen,
  LoginScreen,
  ConfirmDriverScreen,
  HomeScreen,
} from "./app/screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="ConfirmDriverScreen"
            component={ConfirmDriverScreen}
          />
          {/* <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
