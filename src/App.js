import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  React.useEffect(() => new Promise((resolve,reject) => setTimeout( () => 
  resolve({ data: {todoList: JSON.parse(localStorage.getItem("savedTodoList"))}}), 2000))
  .then(function(result) {
    console.log(result);
    setTodoList(result.data.todoList);//is this correct?
    setIsloading(false);//is this correct?
  }),[]);

  React.useEffect(() => {
    if(!isLoading){//is this correct?
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }}, [todoList]);
  
  function addTodo(newTodo){
    setTodoList([...todoList,newTodo]);
  }
  const removeTodo = (id) => {
  
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  
  };
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      {(isLoading)? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
    </>
  );

}

export default App;
