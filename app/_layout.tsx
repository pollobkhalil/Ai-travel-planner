import React from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"), // Add .ttf extension
    "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"), // Add .ttf extension
  });

  if (!fontsLoaded) {
    // Display an ActivityIndicator while fonts are loading
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
