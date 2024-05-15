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
          This app is designed to help you efficiently take and organize notes.
          Whether for work, study, or personal use, it offers a simple interface
          that allows you to easily capture and manage your thoughts and ideas.
          You can categorize notes into different subjects and maintain these
          notes through features that allow adding, updating, and deleting. This
          design ensures that you can conveniently manage your notes content
          anytime, anywhere.
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
          - MIT License
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
