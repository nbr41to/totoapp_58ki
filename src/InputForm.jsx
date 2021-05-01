import React from 'react';

const InputForm = (props) => {
  const [inputText, setInputText] = React.useState('');
  console.log(inputText);

  return (
    <div>
      <label>やること:</label>
      <input onChange={(e) => setInputText(e.target.value)} type='text' />
      <button onClick={() => props.addTodo(inputText)}>追加</button>
    </div>
  );
};

export default InputForm;
