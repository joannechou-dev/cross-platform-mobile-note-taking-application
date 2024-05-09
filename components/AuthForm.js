import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../context/AuthContext";

const AuthForm = ({ navigation, globalStyles }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth(); // Get login method from AuthContext

  const handleAuthSubmit = (type) => {
    const url =
      type === "register"
        ? "http://192.168.15.36:3000/api/auth/register"
        : "http://192.168.15.36:3000/api/auth/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message); // irectly set the message returned from the backend
        if (data.token && data.userId) {
          // Ensure the backend returned token and userId
          AsyncStorage.setItem("jwtToken", data.token) // Use AsyncStorage to save the Token
            .then(() => {
              login(data.userId, data.token); // Use login to update the user state in AuthContext
              setUsername(""); // Clear username
              setPassword(""); // Clear password
              navigation.navigate("Create");

              // Set a timer to clear the message
              setTimeout(() => {
                setMessage("");
              }, 3000);
            })
            .catch((error) => {
              setMessage("Error saving token: " + error.message);
            });
        } else {
          setUsername("");
          setPassword("");
        }
      });
  };

  return (
    <View style={styles.container}>
      {message !== "" && (
        <Text style={[styles.message, globalStyles.text]}>{message}</Text>
      )}
      <View style={styles.inputcontainer}>
        <TextInput
          style={[styles.input, globalStyles.text]}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[styles.input, globalStyles.text]}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, globalStyles.button]}
            onPress={() => handleAuthSubmit("register")}
          >
            <Text style={globalStyles.text}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, globalStyles.button]}
            onPress={() => handleAuthSubmit("login")}
          >
            <Text style={globalStyles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputcontainer: {
    marginTop: 60,
    width: "100%",
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  message: {
    color: "red",
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
    margin: 8,
    borderRadius: 5,
    width: "50%",
    alignItems: "center",
  },
});

export default AuthForm;
