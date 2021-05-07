import React from 'react';
import Select from 'react-select';

const options = [
  { value: '1', label: '★☆☆' },
  { value: '2', label: '★★☆' },
  { value: '3', label: '★★★' }
];

const InputForm = (props) => {
  const [inputText, setInputText] = React.useState('');
  console.log(inputText);

  return (
    <div>
      <label>やること:</label>
      <input onChange={(e) => setInputText(e.target.value)} type='text' />
      <select defaultValue='2'>
        {options.map((option) => <option value={option.value} selected={option.value === '2'}>{option.label}</option>)}
      </select>
      {/* <Select options={options} defaultValue={options[1]} /> */}
      <br />
      <button onClick={() => props.addTodo(inputText)}>追加</button>
    </div>
  );
};

export default InputForm;
