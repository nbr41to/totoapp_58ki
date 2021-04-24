import React from 'react';
import Item from './Item';

const ItemList = (props) => {
  console.log(props.todos);
  return (
    <ul style={{ listStyle: 'none' }}>
      { // js
        props.todos.map((todo) => {
          return <Item todo={todo} />;
        })
      }
    </ul>
  );
};

export default ItemList;
