import React, { useState } from "react";
import InputForm from "./InputForm";
import ItemList from "./ItemList";

const App = () => {
  // JavaScript書く場所
  // const todos = ['パスタ作る', 'PRの修正', 'mtg'];
  // const [todos, setTodos] = useState(['パスタ作る', 'PRの修正', 'mtg']); // 初期値を設定する
  const [todos, setTodos] = useState([
    { id: '01', content: 'パスタを作る', done: false, priority: '★★★☆' },
    { id: '02', content: 'PRの修正', done: false, priority: '★★☆☆' },
    { id: '03', content: 'モンハンやる', done: false, priority: '★★★★' },
    { id: '04', content: 'プログラミングやる', done: false, priority: '★☆☆☆' },
  ]);

  const addTodo = (addValue) => {
    setTodos([...todos,
    { id: '03', content: addValue, done: false, priority: '★☆☆☆' }
    ]);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      if (id === todo.id) {
        return false;
      } else {
        return true;
      }
    });
    setTodos(newTodos);
  };

  return (
    // JSX...jsを使う場合は{}で囲う
    <div className="App">
      <h1>ToDo App</h1>
      <InputForm addTodo={addTodo} />
      <ItemList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
