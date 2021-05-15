import React from 'react';
// import Select from 'react-select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
      <TextField
        type='text'
        label="やること"
        variant="outlined"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      {/* <select
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
      </select> */}
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        variant='outlined'
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        label="優先度"
        defaultValue={options[1].value}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option, index) =>
          <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
        )}
      </Select>
      {/* <Select options={options} defaultValue={options[1]} /> */}
      <Button
        variant="outlined"
        color="primary"
        onClick={() => addTodo(inputText, priority)}
      >
        追加
      </Button>
    </div >
  );
};

// export default InputForm;
