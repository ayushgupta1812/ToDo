import { useDispatch } from 'react-redux';
import {
  removeTodo,markCompleted, markIncomplete,
} from '../redux/actions';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">
          {index + 1}.
        </span>
        <span className={`mr-4 ${todo.completed ? 'line-through text-gray-950' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className='space-x-3 ml-8'>
        <button
          onClick={() => dispatch(removeTodo(index))}
        >
          <DeleteIcon />
        </button>
        {!todo.completed && (
          <button
            onClick={() => dispatch(markCompleted(index))}
          >
            <CheckIcon />
          </button>
        )}
        {todo.completed && (
          <button
            onClick={() => dispatch(markIncomplete(index))}
          >
            <ClearIcon />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
