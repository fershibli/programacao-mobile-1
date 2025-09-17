import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BiscoitoFechado from './assets/biscoito-fechado.png';
import BiscoitoAberto from './assets/biscoito-aberto.png';

const FRASES = [
  "Siga os bons e aprenda com eles",
  "A persistência é o caminho do êxito.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Não desista, grandes coisas levam tempo.",
  "Acredite em si mesmo e todo o resto virá naturalmente.",
  "A vida é 10% do que acontece e 90% de como reagimos a isso.",
  "A única maneira de fazer um excelente trabalho é amar o que você faz.",
  "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
  "A maior barreira para o sucesso é o medo do fracasso."
]

export default function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [imgBiscoito, setImgBiscoito] = useState(BiscoitoFechado);

  const quebrarBiscoito = () => {
    const numeroAleatorio = Math.floor(Math.random() * FRASES.length);
    setTextoFrase(FRASES[numeroAleatorio]);
    setImgBiscoito(BiscoitoAberto);
  };

  const novoBiscoito = () => {
    setTextoFrase("");
    setImgBiscoito(BiscoitoFechado);
  };

  return (
    <View style={styles.container}>
      <Image source={imgBiscoito} style={styles.img} />
      <Text style={styles.textoFrase}>{textoFrase}</Text>
      {textoFrase.length > 0 ? (
        <TouchableOpacity onPress={novoBiscoito} style={styles.button}>
          <Text style={styles.buttonText}>Novo Biscoito</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={quebrarBiscoito} style={styles.button}>
          <Text style={styles.buttonText}>Quebrar Biscoito</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#dd7b22',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
