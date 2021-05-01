import React from 'react';

const Item = (props) => {
  return (
    <li>
      <input type='checkbox' />
      <span>
        優先度：{props.todo.priority}
        {'　'}
        {props.todo.content}
      </span>
      <button onClick={props.removeTodo}>削除</button>
    </li>
  );
};

export default Item;
