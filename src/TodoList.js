import React from 'react';
import TodoListItem from './TodoListItem';


function TodoList(props) {
  const { todoList } = props;

  return (
    <ul>
        {todoList.map(function(item) {
          return (
            <TodoListItem key={item.id} todo={item} onRemoveTodo={props.onRemoveTodo} />
          );
        })}
    </ul>
  );
}

export default TodoList;

