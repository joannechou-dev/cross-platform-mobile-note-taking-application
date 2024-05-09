// theme.js
import { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [isLargeText, setIsLargeText] = useState(false);

  useEffect(() => {
    const getSettings = async () => {
      const storedSetting = await AsyncStorage.getItem("isLargeText");
      const parsedSetting = storedSetting ? JSON.parse(storedSetting) : false;
      setIsLargeText(parsedSetting);
    };
    getSettings();
  }, []);

  return (
    <ThemeContext.Provider value={{ isLargeText, setIsLargeText }}>
      {children}
    </ThemeContext.Provider>
  );
}
