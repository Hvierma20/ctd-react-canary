// import React from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import TodoList from './TodoList';
// import AddTodoForm from './AddTodoForm';
// import PropTypes from "prop-types";

// function TodoContainer() {
//   const [ todoList, setTodoList ] = React.useState([]);
//   const [ isLoading, setIsLoading ] = React.useState(true);


//   React.useEffect(() => {
//     fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, { headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}` } })
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         setTodoList(data.records);
//         setIsLoading(false);
//       })

//   }, []);

//   React.useEffect(() => {
//     if ( !isLoading ) {
//       localStorage.setItem( 'savedTodoList', JSON.stringify(todoList) );
//     }
//   }, [ todoList, isLoading ]);

//   function addTodo(newTodo) {
//     setTodoList( [...todoList, newTodo] );
//   }

//   function removeTodo(id) {
//     const newTodoList = todoList.filter(li => id !== li.id);

//     setTodoList(newTodoList);
//   }
  
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={
//           <>
//             <h1>Todo List</h1>
//             <AddTodoForm onAddTodo={addTodo} />
//             {isLoading ? (<p>Loading...</p>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}
//           </>
//         }/>
//         <Route path="/new" element={
//           <>
//           <h1>New Todo List</h1>
//           </>
//         }/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// TodoContainer.propTypes = {
//     tableName: PropTypes.string,
//   };
// export default TodoContainer;