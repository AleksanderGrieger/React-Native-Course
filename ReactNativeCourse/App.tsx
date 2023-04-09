import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

// import { useFonts } from "expo-font";


function App(): JSX.Element {
  const [userNumber, setUserNumber] = useState<number>();
  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  // useFonts({
  //   'open-sens': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sens-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  // });

  const onPickNumberHandler = (chosenNumber: number) => {
    setUserNumber(chosenNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = (numberOfRounds: number) => {
    setIsGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  const starNewGameHandler = () => {
    setUserNumber(undefined);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={onPickNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen
      pickedNumber={userNumber}
      onGameOver={gameOverHandler}
    />;
  }

  if (isGameOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={starNewGameHandler} />;
  }

  return (
    <LinearGradient style={styles.mainContainer} colors={[Colors.primary700, Colors.accent500]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode={"cover"}
        style={styles.mainContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.mainContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.3
  }
});

export default App;
