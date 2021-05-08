import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const ItemList = (props) => {

  return (
    <StyledItemList>
      { // js
        props.todos.map((todo, index) => {
          return (
            <Item
              key={index}
              todo={todo}
              removeTodo={() => props.removeTodo(todo.id)}
              toggleChecked={props.toggleChecked}
            />
          );
        })
      }
    </StyledItemList>
  );
};

export default ItemList;

const StyledItemList = styled.ul`
  border: 2px solid orange;
  list-style: none;
  padding: 12px;
`;
