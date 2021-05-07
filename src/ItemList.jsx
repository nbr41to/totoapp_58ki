import React from 'react';
import Item from './Item';

const ItemList = (props) => {
  console.log(props.todos);
  return (
    <ul style={{ listStyle: 'none' }}>
      { // js
        props.todos.map((todo) => {
          return (
            <Item
              todo={todo}
              removeTodo={() => props.removeTodo(todo.id)}
              toggleChecked={props.toggleChecked}
            />
          );
        })
      }
    </ul>
  );
};

export default ItemList;
