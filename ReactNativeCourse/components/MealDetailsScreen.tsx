import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealDetails from "./MealDetails";
import Subtitle from "./MealDetail/Subtitle";
import List from "./MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "./IconButton";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MealDetailsScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  const mealId = route.params.mealId;
  // @ts-ignore
  const selectedMeal: Meal = MEALS.find(meal => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("xd");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={faStar} color={"white"} size={25} onPress={headerButtonPressHandler} />;
      }
    });
  }, []);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.mealImg} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  mealImg: {
    width: "100%",
    height: 350
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white"
  },
  detailText: {
    color: "white"
  },
  listOuterContainer: {
    alignItems: "center"
  },
  listContainer: {
    width: "80%"
  }

});

export default MealDetailsScreen;
