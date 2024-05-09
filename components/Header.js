import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../styles/global"; 

const Header = ({ title }) => {
  const globalStyles = GlobalStyles(); // Get dynamic styles
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="book-outline" size={24} color="black" />
      <Text style={[styles.headerText, globalStyles.text]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10, 
  },
});

export default Header;
