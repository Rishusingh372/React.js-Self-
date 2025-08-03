import React from 'react'
import { useState } from 'react'

const Todolist = () => {
  const [task,settask]=useState(" ");
  const [tasks, settasks] = useState([]);
  const handleAddTask = () => {
    if (task) {
      settasks([...tasks, task]);
      settask('');
    }
  };
  const handleInputChange = (e) => {
    settask(e.target.value);
  };
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    settasks(newTasks);
  };

  return (
    <>
      <h1>To Do List</h1>
      <input  type="text" placeholder="Add a new task" value={task}  onChange={handleInputChange}  />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );


}

export default Todolist