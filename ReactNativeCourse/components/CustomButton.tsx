import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonProps {
  text: string,
  onPress: () => void
}

const CustomButton = ({ text, onPress }: ButtonProps) => {

  const pressHandler = () => {
    onPress();
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        style={
          ({ pressed }) => pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden"
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  pressed: {
    opacity: 0.5
  }
});

export default CustomButton;
