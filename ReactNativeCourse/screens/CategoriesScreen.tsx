import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }: { navigation: any }) => {

  const renderCategoryItem = (itemData: any) => {
    const pressHandler = () => {
      navigation.navigate("MilesOverviewScreen", {
        categoryId: itemData.item.id
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );

  };

  return <FlatList
    data={CATEGORIES}
    renderItem={renderCategoryItem}
    // renderItem={
    //   (itemData) =>
    //     <CategoryGridTile
    //       title={itemData.item.title}
    //       color={itemData.item.color}
    //       onPress={pressHandler}
    //     />
    // }
    keyExtractor={(item, index) => item.id}
    // style={styles.grid}
    numColumns={2}
  />;
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row"
    // flexWrap: "wrap",
    // gap: 10
  }
});

export default CategoriesScreen;
