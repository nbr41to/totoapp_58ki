import React from 'react';
import styles from './styles/item.module.css';

const Item = (props) => {
  return (
    <li>
      <input className={styles.checkbox} type='checkbox' checked={props.todo.done} onChange={() => props.toggleChecked(props.todo.id)} />
      <span className={`${styles.contentText} ${props.todo.done ? styles.checkedText : ''}`} >
        優先度：{props.todo.priority}
        {'　'}
        {props.todo.content}
      </span>
      <button className={styles.deleteButton} onClick={props.removeTodo}>削除</button>
    </li>
  );
};

export default Item;
