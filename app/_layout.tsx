import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "Outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-regular": require("./../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/*  <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
