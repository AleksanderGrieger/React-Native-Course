import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import Meal from "../../models/meal";

const MealsList = ({ items }: { items: Meal[] }) => {

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
        data={items}
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

export default MealsList;
