import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, FlatList } from 'react-native';
import { NavBar } from "./src/components/NavBar";
import { TodoScreen } from "./src/screens/TodoScreen";
import { MainScreen } from "./src/screens/MainScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
{id: "1", title: "Боже, как же я"},
{id: "2", title: "Обожаю"},
{id: "3", title: "ККРИТ!!!"}
  ]);

const addTodo = title => {
  setTodos(prev => [
    ...prev,
    {
      id: Date.now().toString(),
      title: title
    }
  ]);
};

const removeTodo = id => {
  const todo = todos.find(t => t.id === id);
  Alert.alert(
    "Удаление элемента",
    'Вы уверены, что хотите удалить $(todo.title)',
    [
      {
        text: "Отмена",
        style: "cancel"
      },
      {
        text: "Удалить",
        onPress: () => {
          setTodoId(null)
          setTodos(prev => prev.filter(todo => todo.id !== id));
        }
      }
    ],
    { cancelable: false }
  );
};

const updateTodo = (id, title) => {
  setTodos(old =>
    old.map(todo => {
      if (todo.id === id) { 
        todo.title = title;
      }
      return todo;
    })
  );
};

let content = (
  <MainScreen
  todos={todos}
  addTodo={addTodo}
  removeTodo={removeTodo}
  openTodo={setTodoId}
  />
);

if (todoId)  {
  const selectedTodo = todos.find(todo => todo.id === todoId);
  content = (
    <TodoScreen
    goBack={() => {
      setTodoId(null);
    }}
    todo={selectedTodo}
    onRemove={removeTodo}
    onSave={updateTodo}
    />
  );
}

return (
  <View>
  <NavBar title = "I Love KKRIT. THIS IS THE BEST COLLEGE"/>
  <View style={styles.container}>{content}</View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});