import { StyleSheet } from "react-native";
import { useTheme } from "../context/theme";

export function GlobalStyles() {
  const { isLargeText } = useTheme();

  const styles = StyleSheet.create({
    text: {
      fontSize: isLargeText ? 20 : 17,
    },
  });

  return styles;
}
