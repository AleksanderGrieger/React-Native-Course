import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

interface CardProps {
  children: JSX.Element[];
}

const Card = ({ children }: CardProps) => {
  return (
    <View style={styles.card}>{children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,

    justifyContent: "space-between",
    alignItems: "center"
  }
});
export default Card;
