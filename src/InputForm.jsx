import React from 'react';
import Select from 'react-select';

const options = [
  { value: '★☆☆', label: '★☆☆' },
  { value: '★★☆', label: '★★☆' },
  { value: '★★★', label: '★★★' }
];

export const InputForm = ({ addTodo, inputText, setInputText, ...props }) => {

  // const [inputText, setInputText] = React.useState('');
  const [priority, setPriority] = React.useState('');
  console.log(priority);
  return (
    <div>
      <label>やること:</label>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type='text'
      />
      <select
        defaultValue={options[1].value}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        {options.map((option, index) => {
          // console.log(option.label);
          return (
            <option
              key={index}
              value={option.value}
              selected={option.value === '★★☆'}
            >
              {option.label}
            </option>
          );
        })}
      </select>
      {/* <Select options={options} defaultValue={options[1]} /> */}
      <br />
      <button onClick={() => addTodo(inputText, priority)}>追加</button>
    </div>
  );
};

// export default InputForm;
