import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaViewBase } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CestaScreen from "./src/screens/Cesta";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Cesta">
          <Stack.Screen
            name="Cesta"
            component={CestaScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
