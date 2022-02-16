import React from 'react';
import style from './TodoListItem.module.css'

function TodoListItem(props) {
  const { todo } = props;

  return (
    <li className={style.ListItem}>
      { todo.fields.Title }
      <button type="button" onClick={()=>{props.onRemoveTodo(todo.id)}}>Remove</button>
    </li>
  );
}

export default TodoListItem;