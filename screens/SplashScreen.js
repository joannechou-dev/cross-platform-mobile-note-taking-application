import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Main");
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/notebook.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default SplashScreen;
