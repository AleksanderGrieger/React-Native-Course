import { StyleSheet, Text, TextStyle } from "react-native";
import Colors from "../constants/colors";

interface InstructionTextProps {
  children: string;
  style?: TextStyle;
}

const InstructionText = ({ children, style }: InstructionTextProps) => {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent500
  }
});

export default InstructionText;
