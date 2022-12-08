import { View, StatusBar, StyleSheet } from 'react-native';
import ButtonTool from './app/components/ButtonTool';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})