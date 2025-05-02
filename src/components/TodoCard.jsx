import React from 'react';

const TodoCard = ({ title, description, onEdit, onDelete }) => {
  return (
    <div className="bg-white border-2 border-amber-200 m-3 shadow-md rounded-xl p-4 w-full max-w-md mx-auto sm:mx-0 sm:w-[48%] lg:w-[32%]">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between">
        <button
          onClick={onEdit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
