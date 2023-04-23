import { Pressable, StyleSheet, Text, View } from "react-native";

interface CategoryGridTileProps {
  title: string;
  color: string;
  onPress: (item: any) => void;
}

const CategoryGridTile = ({ title, color, onPress }: CategoryGridTileProps) => {

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.itemText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white"
  }
});

export default CategoryGridTile;
