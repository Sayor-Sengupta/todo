import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.PressedItem}//ios
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: "#AEF7F1",
    color: "white",
  },
  text: {
    padding: 8,
  },
  PressedItem: {
    opacity: 0.5,
  },
});
