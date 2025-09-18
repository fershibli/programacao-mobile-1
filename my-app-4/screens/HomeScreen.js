import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Ir para Cadastro" onPress={() => navigation.navigate("Register")} />
            <Button title="Ir para Consulta" onPress={() => navigation.navigate("Query")} />
        </View>
    )
}

export default HomeScreen;  