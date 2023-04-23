// import { useContext } from "react";
// import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const FavouritesScreen = () => {
  // const favouritesCtx = useContext(FavouritesContext);

  // @ts-ignore
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);


  // const displayedMeals = favouritesCtx.ids.map(
  //   (id) => MEALS.find(meal => meal.id === id)
  // );
  const favouriteMeals = MEALS.filter(
    // (meal) => favouritesCtx.ids.includes(meal.id)
    (meal) => favouriteMealIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals</Text>
      </View>
    );
  }
  return <MealsList items={favouriteMeals} />;
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
});
export default FavouritesScreen;
