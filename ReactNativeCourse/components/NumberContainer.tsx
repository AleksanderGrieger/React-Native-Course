import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

interface NumberContainerProps {
  children: number
}

const NumberContainer = ({children}: NumberContainerProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
})

export default NumberContainer;
