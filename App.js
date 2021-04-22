import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from "./src/NavBar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {
const [todos, setTodos] = useState([]);

const addTodo = title => {
  setTodos(prev => [
    ...prev,
    {
      id: Date.now().toString(),
      title: title
    }
  ]);
};

return (
  <View>
  <NavBar title = "I Love KKRIT. THIS IS THE BEST COLLEGE"/>
  <View style={styles.container}>
    <AddTodo onSublit={addTodo} />
    <View>
    {todos.map(todo=> (
      <Todo key={todo.id} todo={todo} />
    ))}
</View>
</View>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});