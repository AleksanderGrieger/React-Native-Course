import { StyleSheet, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

const StartGameScreen = () => {

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <CustomButton text={'Reset'} onPress={() => console.log('xd')}/>
      <CustomButton text={'Confirm'} onPress={() => console.log('xd')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#4e0329',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,

    // justifyContent: "space-around",
    // alignItems: "center"
  },
  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 8,
    fontSize: 32,
    fontWeight: "bold",
    color: '#ddb52f',
    borderBottomWidth: 2,
    borderBottomColor: '#ddb52f',
    textAlign: 'center',
  },
});

export default StartGameScreen;
