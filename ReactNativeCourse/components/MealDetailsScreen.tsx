import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealDetails from "./MealDetails";
import Subtitle from "./MealDetail/Subtitle";
import List from "./MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "./IconButton";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons/faStar";
// import { FavouritesContext } from "../store/context/favourites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";

const MealDetailsScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  // const favouritesCtx = useContext(FavouritesContext);

  // @ts-ignore
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  // @ts-ignore
  const selectedMeal: Meal = MEALS.find(meal => meal.id === mealId);
  // const mealIsFavourite: boolean = favouritesCtx.ids.includes(mealId);
  const mealIsFavourite: boolean = favouriteMealIds.includes(mealId);

  const headerButtonPressHandler = () => {
    if (mealIsFavourite) {
      // favouritesCtx.removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // favouritesCtx.addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? faStarSolid : faStarReg}
            color={mealIsFavourite ? "gold" : "white"}
            size={25}
            onPress={headerButtonPressHandler}
          />
        );
      }
    });
  }, [mealIsFavourite]);

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
