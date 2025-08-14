import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import imagem from './assets/splash-icon.png'

export default function App() {
  return (
    <LinearGradient
      colors={['#eaffff', '#ffeaea']}
      style={styles.container}
      >
      <Text>Olá Mundo</Text>
      <Text>Fatec Votorantim</Text>
      <Text style={{ fontSize: 20, color: '#333' }}>React Native</Text>
      <StatusBar style="auto" />
      <Image source={imagem} style={{ width: 200, height: 200 }} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
