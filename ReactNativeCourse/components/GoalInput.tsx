import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

interface GoalInputProps {
  addGoalHandler: (text: string) => void,
  onClose: () => void,
  visible: boolean
}

const GoalInput = ( {addGoalHandler, onClose, visible}: GoalInputProps): JSX.Element => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  const addGoal = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText('')
  }
  return (
    <Modal visible={visible}>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoal} />
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});

export default GoalInput;
