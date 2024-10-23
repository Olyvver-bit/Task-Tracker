import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import Quote from './components/Quote';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  //Add a task
  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false }])
  };

  //Toggle task completion 
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  //Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <TaskList tasks={tasks} addTask={addTask} toggleTask={toggleTask} deleteTask={deleteTask} />
      <Quote />
    </div>
   );
}

export default App;