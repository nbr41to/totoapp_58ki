import InputForm from "./InputForm";
import ItemList from "./ItemList";

const App = () => {
  // JavaScript書く場所
  const todos = ['パスタ作る', 'PRの修正', 'mtg'];

  const add = () => {
    todos.push('モンハンやる');
    console.log(todos);
  };

  return (
    // JSX...jsを使う場合は{}で囲う
    <div className="App">
      <h1>ToDo App</h1>
      <InputForm add={add} />
      <ItemList todos={todos} />
    </div>
  );
};

export default App;
