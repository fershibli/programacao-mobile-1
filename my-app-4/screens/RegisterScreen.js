import React from "react";
import { Button, Text, TextInput, View } from "react-native";

function RegisterScreen() {
    return (
        <View>
            <Text>Register Screen</Text>
            <TextInput placeholder="Nome" />
            <TextInput placeholder="Email" />
            <TextInput placeholder="Senha" secureTextEntry />
            <Button title="Cadastrar" onPress={() => {}} />
        </View>
    )
}

export default RegisterScreen;
