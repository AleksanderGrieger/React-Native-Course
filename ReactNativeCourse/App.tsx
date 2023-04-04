import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  View
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";


function App(): JSX.Element {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  interface Goal {
    text: string;
    id: string;
  }

  function addGoalHandler(text: string) {
    let newGoal: Goal = {
      text: text,
      id: Math.random().toString(),
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      newGoal,
    ]);
    hideModal();
  }

  const deleteGoalHandler = (id: string) => {
    setCourseGoals(() => courseGoals.filter(goal => goal.id !== id))
  }

  const showModal = () => {
    setIsModalVisible(true)
  }
  const hideModal = () => {
    setIsModalVisible(false)
  }

  return (
    <View style={styles.appContainer}>
      <Button title={'Add New Goal'} onPress={showModal} />
      <GoalInput addGoalHandler={addGoalHandler} onClose={hideModal} visible={isModalVisible}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteGoal={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
