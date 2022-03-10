import { React } from 'react';
import InputWithLabel from './InputWithLabel';
import style from './TodoListItem.module.css'
import PropTypes from "prop-types";


const AddTodoForm = ({ handleAddTodo, handleTitleChange, todoTitle }) => {

  return (
      <form onSubmit={handleAddTodo}>
        <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>
          Title:
        </InputWithLabel>
        <button className={style.Button} >Add</button>
      </form>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;