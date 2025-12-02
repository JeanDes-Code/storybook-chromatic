import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import {
  useFonts, Poppins_400Regular
} from '@expo-google-fonts/poppins';

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  
  const [fontsLoaded] = useFonts({Poppins_400Regular});
  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: "purple",
    alignSelf: "flex-start",
    borderRadius: 8,
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold", fontFamily: "Poppins_400Regular" },
});
