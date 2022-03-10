import React from 'react';
import style from './TodoListItem.module.css'
import PropTypes from "prop-types";

function TodoListItem(props) {
  const { todo } = props;

  return (
    <li className={style.ListItem}>
      { todo.fields.Title }
      <button className={style.Button} onClick={()=>{props.onRemoveTodo(todo.id)}}>Remove</button>
    </li>
  );
}

TodoListItem.propTypes = {
  onRemoveTodo: PropTypes.func,
  todo: PropTypes.string,
};
export default TodoListItem;