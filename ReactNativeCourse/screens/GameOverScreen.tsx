import { Dimensions, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import CustomButton from "../components/CustomButton";

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }: GameOverScreenProps) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image source={require("../assets/images/success.png")} style={styles.image} />
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds
          to
          guess the
          number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <CustomButton text={"Start New Game"} onPress={onStartNewGame} />
      </View>
    </ScrollView>
  );
};

// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
