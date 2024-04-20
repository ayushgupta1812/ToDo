import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import AddIcon from '@mui/icons-material/Add';
import { addTodo } from '../redux/actions';

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-gray-400 text-white rounded hover:bg-gray-950 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <AddIcon />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
