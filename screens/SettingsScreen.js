import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Switch,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../context/theme";
import Header from "../components/Header";
import { GlobalStyles } from "../styles/global";

const SettingsScreen = ({ navigation }) => {
  // Ensure to obtain navigation from props
  const { isLargeText, setIsLargeText } = useTheme();
  const globalStyles = GlobalStyles(); // Get dynamic styles

  useEffect(() => {
    const getSettings = async () => {
      const storedSetting = await AsyncStorage.getItem("isLargeText");
      const parsedSetting = storedSetting ? JSON.parse(storedSetting) : false;
      setIsLargeText(parsedSetting);
    };
    getSettings();
  }, []);

  const toggleTextSize = async () => {
    const newSetting = !isLargeText;
    await AsyncStorage.setItem("isLargeText", JSON.stringify(newSetting));
    setIsLargeText(newSetting);
  };

  const handleDeleteAccount = async () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: deleteAccount }, // Directly reference deleteAccount
      ]
    );
  };

  const deleteAccount = async () => {
    const token = await AsyncStorage.getItem("jwtToken");
    fetch("http://192.168.15.37:3000/api/auth/delete", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to delete the account");
        return response.json();
      })
      .then(() => {
        AsyncStorage.clear(); // Clear all local storage data
        navigation.navigate("Home"); // Use navigation to go to the homepage
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Header title="Welcome to Settings Page" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.setting}>
          <Text style={[styles.settingText, globalStyles.text]}>
            Swipe to adjust text size
          </Text>
          <Switch
            value={isLargeText}
            onValueChange={toggleTextSize}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>
        <TouchableOpacity
          onPress={handleDeleteAccount}
          style={styles.deleteButton}
        >
          <Text style={[styles.deleteButtonText, globalStyles.text]}>
            Delete Account
          </Text>
        </TouchableOpacity>
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
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  setting: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  settingText: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 20,
  },
  deleteButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  deleteButtonText: {
    color: "red",
    fontWeight: "bold",
  },
});

export default SettingsScreen;
