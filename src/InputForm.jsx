
const InputForm = (props) => {
  return (
    <div>
      <label>やること:</label>
      <input type='text' />
      <button onClick={props.add}>追加</button>
    </div>
  );
};

export default InputForm;
