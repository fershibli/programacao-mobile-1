import React from "react";
import { Button, Text, TextInput, View } from "react-native";

function RegisterScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Register Screen</Text>
            <TextInput placeholder="Nome" style={{ borderWidth: 1, borderColor: 'gray', width: '80%', padding: 10 }} />
            <TextInput placeholder="Email" style={{ borderWidth: 1, borderColor: 'gray', width: '80%', padding: 10 }} />
            <TextInput placeholder="Senha" secureTextEntry style={{ borderWidth: 1, borderColor: 'gray', width: '80%', padding: 10 }} />
            <Button title="Cadastrar" onPress={() => {}} />
        </View>
    )
}

export default RegisterScreen;
