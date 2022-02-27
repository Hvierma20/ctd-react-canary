import React from 'react';
import PropTypes from "prop-types";

function InputWithLabel(props) {

  const inputRef = React.useRef();
 
  React.useEffect(() => {
      inputRef.current.focus();
    }
  );

  return (
    <>
      <label htmlFor="todoTitle">{props.children}</label>
      <input type="text" id="todoTitle" name="title" value={props.todoTitle} onChange={props.handleTitleChange} ref={inputRef}/>
    </>
  );
}

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
};

export default InputWithLabel;

