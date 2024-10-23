import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, addTask, toggleTask, deleteTask }) {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <div>
            <h2>My Tasks</h2>
            <input
                type="text"
                value={newTask}
                onChange={ (e) => setNewTask(e.target.value) }
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;