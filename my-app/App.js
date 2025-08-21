import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LogoFatec from './assets/fatec-votorantim.png';
import LogoReact from './assets/react-native-logo.png';

export default function App() {
  const [color, setColor] = useState(0);

  const nome = 'Fatec Votorantim';

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => (prevColor + 10) % 360);
    }, 5);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <LinearGradient
      colors={['#eaffff', '#ffeaea']}
      style={styles.container}
      >
      <Text>Olá Mundo</Text>
      <Text style={styles.title}>{nome}</Text>
      <Text style={[styles.subtitle, { color: `hsla(${color}, 100%, 50%, 1.00)` }]}>React Native</Text>
      <StatusBar style="auto" />
      <Image source={LogoFatec} style={styles.logoFatec} />
      <Image source={LogoReact} style={styles.logoReact} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: { 
    fontSize: 20, 
    fontWeight: 'bold',
  },
  logoFatec: {
    marginTop: 16,
  },
  logoReact: { 
    width: 100, 
    height: 100, 
    resizeMode: 'contain' 
  }
});
