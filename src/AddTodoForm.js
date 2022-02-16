import React from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm(props) {
    
  const [ todoTitle, setTodoTitle ] = React.useState('');
  const { onAddTodo } = props;

  function handleTitleChange(event) {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    setTodoTitle('');
  }

  return (
      <form onSubmit={handleAddTodo}>
        <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>
          Title:
        </InputWithLabel>
        <button>Add</button>
      </form>
  );
}

export default AddTodoForm;