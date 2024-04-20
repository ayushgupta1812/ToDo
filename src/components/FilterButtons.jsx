// FilterButtons.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { markAllCompleted } from '../redux/actions';

const FilterButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex space-x-4 items-center">

      <button
        className="text-sm px-2 py-1 bg-gray-700 text-white rounded "
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
