// HomeScreen.js
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import { GlobalStyles } from "../styles/global";
import AuthForm from "../components/AuthForm";

const HomeScreen = ({ navigation }) => {
  // Receive the navigation object
  const globalStyles = GlobalStyles(); // Get dynamic styles

  return (
    <View style={styles.container}>
      {/* Header is outside the ScrollView */}
      <Header title="Welcome to HomePage" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.text, globalStyles.text]}>
          Please log in before creating notes. If you do not have an account,
          please register first.
        </Text>
        {/* Insert AuthForm component here */}
        <AuthForm navigation={navigation} globalStyles={globalStyles} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBD6D6",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
  },
  scrollContent: {
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: "#000",
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 30,
  },
});

export default HomeScreen;
