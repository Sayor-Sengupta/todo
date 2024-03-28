import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
  ImageBackground,
} from "react-native";
import { useState } from "react";
function GoalItem(props) {
  const [goal, setGoal] = useState("");
  function inputHandler(g) {
    setGoal(g);
  }
  function addGoalHandler() {
    props.OnaddGoal(goal);
    setGoal("");
  }
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.img} source={require("../assests/image.png")} />
        <TextInput
          style={styles.input}
          placeholder="your course goal"
          onChangeText={inputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: `center`,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: `#ccccccc`,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",

    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  img: {
    height: 100,
    width: 100,
  },
});
