import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/Colors';
import { Header } from '@/components/header';

export default function Index() {
  return (
    <LinearGradient
      colors={['#6a6b6a', '#000000']}
      style={styles.container}
    >
      <Header></Header>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
  },
  text: {
    color: '#fff',
  },
  header: {
    alignSelf: 'center'
  }
});
