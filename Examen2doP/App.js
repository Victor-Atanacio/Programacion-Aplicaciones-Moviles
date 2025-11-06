import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MifaleriaScreen from './screens/MifaleriaScreen';
export default function App() {
  return (
    <MifaleriaScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
