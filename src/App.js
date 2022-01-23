import React, { useState, useEffect } from "react";
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


console.log("Checking .env", process.env)
function App() {
  const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

  useEffect(
		() =>
    fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setTodoList([...result.records]);
        setIsLoading(false);
      }),
      []
  );

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const removeTodo = (id) => {
    const newTodo = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(newTodo);
  };
	
  return (
    <>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			{isLoading ? (
				<p>Loading..</p>
			) : (
				<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
			)}
		</>
  );

}

export default App;
