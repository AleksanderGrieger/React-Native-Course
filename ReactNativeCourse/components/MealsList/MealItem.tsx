import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

interface MealItemProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: string;
  complexity: string;
  affordability: string;
  // onPress: (item: any) => void;
}

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }: MealItemProps) => {
  const { navigate } = useNavigation();

  const pressHandler = () => {
    // @ts-ignore
    navigate("MealDetailsScreen", {
      mealId: id
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
        onPress={pressHandler}
        // onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.mealImg} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible"
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  mealImg: {
    width: "100%",
    height: 200
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8
  },
  buttonPressed: {
    opacity: 0.5
  }
});

export default MealItem;
