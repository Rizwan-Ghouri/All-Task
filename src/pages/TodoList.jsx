import React, { useEffect, useState } from 'react';
import TodoCard from '../components/TodoCard';

const TodoList = () => {
  let [frmdata , setfrmdata] = useState({title: '', description: ''});
  let [data , setdata] = useState([]);

  // console.log(arr);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('data'));
    if (saved) setdata(saved);
  }, []);
  
  const handleAdd = () => {
    const newTodo = {
      id: Date.now(),
      title: frmdata.title,
      description: frmdata.description,
    };
    setdata(prev => [...prev, newTodo]);
    setfrmdata({ title: '', description: '' }); // Clear form
  };

  const handleEdit = (id, updatedTitle, updatedDesc) => {
    updatedTitle = prompt('enter')
    updatedDesc = prompt('enter')
    const updatedTodos = data.map(todo =>
      todo.id === id ? { ...todo, title: updatedTitle, description: updatedDesc } : todo
    );
    setdata(updatedTodos);
    localStorage.setItem('data', JSON.stringify(updatedTodos));
  };

  const handleDelete = (id) => {
    const updatedTodos = data.filter(item => item.id !== id);
    // data.pop(updatedTodos)
    console.log('Deleted:', updatedTodos);
    localStorage.setItem('data', JSON.stringify(updatedTodos));
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);
    
    return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">My Todo List</h1>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 p-4">
  <input
    value={frmdata.title}
    onChange={e => setfrmdata({...frmdata, title : e.target.value})}
    type="text"
    placeholder="Enter your title"
    className="w-full sm:w-1/3 border-2 p-3 rounded-3xl text-xl font-semibold text-start"
  />
  <input
    value={frmdata.description}
    onChange={e => setfrmdata({...frmdata, description : e.target.value})}
    type="text"
    placeholder="Enter your description"
    className="w-full sm:w-1/3 border-2 p-3 rounded-3xl text-xl font-semibold text-start"
  />
  <button
    onClick={handleAdd}
    className="w-full sm:w-28 border-2 p-2 rounded-3xl text-xl font-bold text-center hover:bg-amber-400"
    >
    Add
  </button>
</div>     
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {data.map((todo) => (
          <TodoCard
            key={todo.id}
            title={todo.title}
            description={todo.description}
            onEdit={() => handleEdit(todo.id)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
