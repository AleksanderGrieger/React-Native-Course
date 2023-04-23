import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "./MealsList/MealsList";

const MilesOverviewScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    // @ts-ignore
    const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;
    navigation.setOptions({
      title: categoryTitle
    });
  }, [categoryId, navigation]);


  return (
    <MealsList items={displayedMeals} />
  );
};

export default MilesOverviewScreen;
