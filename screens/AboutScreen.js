import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../styles/global";

const AboutScreen = () => {
  const globalStyles = GlobalStyles(); // Get dynamic styles
  return (
    <View style={styles.container}>
      <Header title="Welcome to About Page" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.text, globalStyles.text]}>
          This app is designed to help you take and organize notes efficiently.
          Whether for work, study, or personal use, it offers a simple interface
          to capture and manage your thoughts and ideas. You can categorize
          notes into different subjects, search for specific notes by keyword,
          and set reminders for important tasks. The app also allows for
          seamless syncing across multiple devices, ensuring that your notes are
          always accessible whenever and wherever you need them.
        </Text>
        <View style={styles.licenseHeader}>
          <Ionicons
            name="key-outline"
            size={23}
            color="black"
            style={{ marginRight: 10 }}
          />
          <Text style={[styles.licensesTitle, globalStyles.text]}>
            Open Source Licenses
          </Text>
        </View>
        <Text style={[styles.license, globalStyles.text]}>
          - react-native: MIT License
        </Text>
        <Text style={[styles.license, globalStyles.text]}>
          - react-navigation: MIT License
        </Text>
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
    fontSize: 15,
    color: "#000",
    marginRight: 10,
    marginLeft: 10,
  },
  licenseHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 40,
  },
  licensesTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  license: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default AboutScreen;
