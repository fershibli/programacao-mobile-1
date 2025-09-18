import React from "react";
import { Button, Text, TextInput, View } from "react-native";

function RegisterScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Register Screen</Text>
      <TextInput placeholder="Nome" style={styles.textInput} />
      <TextInput placeholder="Email" style={styles.textInput} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.textInput} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.textInput} />
      <Button title="Cadastrar" onPress={() => {}} />
    </View>
  );
}

const styles = {
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    padding: 10,
  },
};

export default RegisterScreen;
