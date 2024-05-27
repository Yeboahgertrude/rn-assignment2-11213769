import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
   <Text style={{ fontSize: 24 }}>
        My name is{' '}
        <Text style={{ fontWeight: 'bold' }}>Yeboah Gertrude Asabea</Text>
      </Text>
    <StatusBar style="auto"/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
