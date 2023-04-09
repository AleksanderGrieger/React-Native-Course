import {
  Alert,
  Dimensions,
  KeyboardAvoidingView, ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View
} from "react-native";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

interface StartGameScreenProps {
  onPickNumber: (userNumber: number) => void;
}

const StartGameScreen = ({ onPickNumber }: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");
  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredNumber: string) => {
    setEnteredNumber(enteredNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (chosenNumber < 1 || isNaN(chosenNumber) || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be between 1 and 99.",
        [
          { text: "OK", style: "destructive", onPress: resetInputHandler }
        ]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior={"position"}>
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <CustomButton text={"Reset"} onPress={resetInputHandler} />
              </View>
              <View style={styles.buttonContainer}>
                <CustomButton text={"Confirm"} onPress={confirmInputHandler} />
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

// const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 15 : 100,
    alignItems: "center"
  },
  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 8,
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.accent500,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    textAlign: "center"
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1
  }
});

export default StartGameScreen;
