import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "./MealItem";
import { useLayoutEffect } from "react";

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

  const renderMealItem = (itemData: any) => {
    // const pressHandler = () => {
    //   navigation.navigate('MealDetailsScreen', {
    //     categoryId: itemData.item.id
    //   });
    // };

    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability
    };

    return <MealItem
      id={mealItemProps.id}
      title={mealItemProps.title}
      imageUrl={mealItemProps.imageUrl}
      duration={mealItemProps.duration}
      complexity={mealItemProps.complexity}
      affordability={mealItemProps.affordability}
      // onPress={pressHandler}
    />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

export default MilesOverviewScreen;
