import React from 'react';

const Item = (props) => {
  return (
    <li>
      <input type='checkbox' />
      {props.todo}
    </li>
  );
};

export default Item;
