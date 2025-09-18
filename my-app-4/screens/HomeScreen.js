import React from "react";
import { View } from "react-native";

function HomeScreen() {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Ir para Cadastro" onPress={() => navigation.navigate("Register")} />
            <Button title="Ir para Consulta" onPress={() => navigation.navigate("Query")} />
        </View>
    )
}

export default HomeScreen;  