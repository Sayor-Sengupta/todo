import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/goalinput";
import { useState } from "react";
import GoalItem from "./components/goalitem";
export default function App() {
  const [course, setCourse] = useState([]);
  const [isModal, setModal] = useState(false);
  function startAddGoal() {}
  function addGoal(goal) {
    if (goal != "") {
      setCourse((enter) => [
        ...enter,
        { text: goal, id: Math.random().toString() },
      ]);
      cancelModal();
    }
  }
  function goalDelete(id) {
    setCourse((enter) => {
      return enter.filter((goal) => goal.id !== id);
    });
  }
  function startModal() {
    setModal(true);
  }
  function cancelModal() {
    setModal(false);
  }
  return (
    <>
      <StatusBar style="light" />

      <View style={styles.Appcontainer}>
        <Button title="Add New Goal" color="#808B96" onPress={startModal} />

        <GoalItem
          visible={isModal}
          OnaddGoal={addGoal}
          onCancel={cancelModal}
        />
        <View style={styles.goals}>
          <FlatList
            data={course}
            renderItem={(item) => {
              return (
                <GoalInput
                  text={item.item.text}
                  id={item.item.id}
                  onDelete={goalDelete}
                  keyExtractor={(item, index) => {
                    return item.id;
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#cccccc",
  },

  goals: {
    flex: 5,
  },
});
