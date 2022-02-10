import React from 'react';

function TodoListItem(props) {
  const { todo } = props;

  return (
    <li>
      { todo.fields.Title }
      <button type="button" onClick={()=>{props.onRemoveTodo(todo.id)}}>Remove</button>
    </li>
  );
}

export default TodoListItem;