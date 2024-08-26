import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarItem  from './Components/CarItem';
import CarsList from './Components/CarList';
import Header from './Components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
        <CarsList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
