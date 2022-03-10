import { React , useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import PropTypes from "prop-types";
import Airtable from 'airtable';

var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

function App() {
  const [ todoList, setTodoList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [todoTitle, setTodoTitle] = useState('');

  
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const fetchTodo = () => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`, { headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}` } })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      setTodoList(data.records);
      setIsLoading(false);
    })
  }

  const handleAddTodo = async (event) => {
    event.preventDefault();
    await base('Default').create([
      {
        "fields": {
          "Title": todoTitle
        }
      }
    ], function(err, records) {
      if (err) {
        console.log(err);
      }
      fetchTodo();
    });
    setTodoTitle('');
  }

  const removeTodo = (id) => {
    base('Default').destroy([id], function(err, deletedRecords) {
      if (err) {
        console.error(err);
        return;
      }
      fetchTodo();
  });
}

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={
        <div>
            <AddTodoForm handleTitleChange={handleTitleChange} todoTitle={todoTitle} handleAddTodo={handleAddTodo} />
          {
            isLoading ?
              <p>Loading...</p> :
              <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
          }
        </div>
        } />

        <Route exact path="/" element={
          <h1>New Todo List</h1>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

App.propTypes = {
    tableName: PropTypes.string,
  };
export default App;