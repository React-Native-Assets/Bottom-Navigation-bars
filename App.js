import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './Components/BottomNavigation';
export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
            <BottomNavigation/>
        </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});
