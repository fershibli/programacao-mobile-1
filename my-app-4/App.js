import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import QueryScreen from "./screens/QueryScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Tela Inicial" }}
        />
        <Stack.Screen
          name="Query"
          component={QueryScreen}
          options={{ title: "Tela de Consulta" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Tela de Registro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
