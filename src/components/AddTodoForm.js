import React from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from "prop-types";

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

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;