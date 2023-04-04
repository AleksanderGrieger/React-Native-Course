import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = (
  {text, id, onDeleteGoal}:{text: String, id: string,onDeleteGoal: (id: string)=>void}
): JSX.Element => {

  // const deleteGoal = () => {
  //   onDeleteGoal(id);
  // }

  return (
    <Pressable
      onPress={onDeleteGoal.bind(this, id)}
      style={({ pressed }) => pressed && styles.onPress}
    >
    {/*<Pressable onPress={deleteGoal}>*/}
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
  onPress: {
    opacity: 0.5
  }
});

export default GoalItem;
