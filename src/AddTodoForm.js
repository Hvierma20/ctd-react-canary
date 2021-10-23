import React from "react";


function AddTodoForm(){

    return(
        <form > 
            <label htmlFor="todoTitle">
                Title
            </label>
            <input type="text" id="todoTitle" name="title"/> 
            <button type="submit">
                Add
            </button>
        </form>
    )

}

export default AddTodoForm;