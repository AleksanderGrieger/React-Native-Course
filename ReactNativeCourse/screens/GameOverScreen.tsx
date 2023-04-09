import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import CustomButton from "../components/CustomButton";

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }: GameOverScreenProps) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/success.png")} style={styles.image} />
      </View>
      <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess the
        number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <CustomButton text={"Start New Game"} onPress={onStartNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    margin: 20,
    borderColor: Colors.primary800,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  summaryText: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 24
  },
  highlight: {
    color: Colors.primary500
  }
});

export default GameOverScreen;
