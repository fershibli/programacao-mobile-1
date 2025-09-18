import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Button title="Ir para Cadastro" onPress={() => navigation.navigate("Register")} />
            <Button title="Ir para Consulta" onPress={() => navigation.navigate("Query")} />
        </View>
    )
}

export default HomeScreen;  