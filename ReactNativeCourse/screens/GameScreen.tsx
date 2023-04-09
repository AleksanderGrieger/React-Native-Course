import { Alert, FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import GuessLogItem from "../components/GuessLogItem";

interface GameScreenProps {
  pickedNumber: number;
  onGameOver: (numberOfRounds: number) => void;
}

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ pickedNumber, onGameOver }: GameScreenProps) => {
  const initialGuess: number = generateRandomBetween(1, 100, pickedNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([currentGuess]);

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, pickedNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < pickedNumber)
      || (direction === "greater" && currentGuess > pickedNumber)
    ) {
      Alert.alert(
        "Don't lie!",
        "You know it was wrong...",
        [{ text: "OK", style: "cancel" }]
      );
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    let newRndNumber: number = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton text={"👎"} onPress={nextGuessHandler.bind(this, "lower")} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton text={"👍"} onPress={nextGuessHandler.bind(this, "greater")} />
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={
            (itemData) => {
              return (
                <GuessLogItem
                  roundNumber={guessRoundsListLength - itemData.index}
                  guess={itemData.item}
                />
              );
            }}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 30,
    alignItems: "center"
  },
  instructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
});

export default GameScreen;
