import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import CreateNoteScreen from "../screens/CreateNoteScreen";
import SettingsScreen from "../screens/SettingsScreen";

// Screen names
const homeName = "Home";
const createnoteName = "Create";
const aboutName = "About";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === createnoteName) {
            iconName = focused ? "create" : "create-outline";
          } else if (route.name === aboutName) {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === settingsName) {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "gray",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: { paddingBottom: 0, fontSize: 10 },
        tabBarStyle: {
          backgroundColor: "#EBD6D6",
          borderTopColor: "black",
          borderTopWidth: 1,
          paddingTop: 10,
          height: 80, 
        },
      })}
    >
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={createnoteName}
        component={CreateNoteScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={aboutName}
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={settingsName}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
export default MainContainer;
