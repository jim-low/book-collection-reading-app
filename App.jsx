import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Book from './components/Book';

const App = () => {
  return (
    <View style={styles.container}>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

