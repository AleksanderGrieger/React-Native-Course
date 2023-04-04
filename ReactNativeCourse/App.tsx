import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";


function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.mainContainer}>
        <StartGameScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#6e4cc4',
  }
});

export default App;
