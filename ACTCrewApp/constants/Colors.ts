import { DefaultTheme } from "react-native-paper";
/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    ...DefaultTheme.colors,
    text: "#383E50",
    border: "#383E504D",
    header: "#383E50",
    primary: "#0A7AFF",
    secondary: "#1F2732",
    error: "#ED1C24",
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    bg_surface: '#FFFBFF',
    purple: '#7B61FF'
  },
  dark: {
    border: "#383E504D",
    header: "#383E50",
    primary: "#0A7AFF",
    secondary: "#1F2732",
    error: "#ED1C24",
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    bg_surface: '#1D1B1E',
    purple: '#7B61FF'
  },
};
