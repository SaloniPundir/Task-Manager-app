import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const Task = () => {

  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [editTaskName, setEditTaskName] = useState('');
  const [currentEditTask, setCurrentEditTask] = useState(null);

  // Fetch tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/task/get');
        setTasks(response.data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
    console.log(tasks);
  }, []);

  // Add a new task
  const handleAddTask = async () => {
    if (!newTaskName) return alert('Task name cannot be empty.');
    console.log(newTaskName)
    try {
      const response = await axios.post('http://localhost:8000/api/task/add', { name: newTaskName });
      
      setTasks([...tasks, response.data.task]);
      setNewTaskName('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Delete a task
  const handleDeleteTask = async (taskName) => {
    try {
      await axios.delete('http://localhost:8000/api/task/delete', { data: { name: taskName } });
      setTasks(tasks.filter((task) => task.name !== taskName));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Edit a task
  const handleEditTask = async () => {
    if (!editTaskName) return alert('New task name cannot be empty.');
    try {
      const response = await axios.patch('http://localhost:8000/api/task/edit', {
        currentName: currentEditTask,
        newName: editTaskName,
      });
      setTasks(
        tasks.map((task) =>
          task.name === currentEditTask ? { ...task, name: editTaskName } : task
        )
      );
      setEditTaskName('');
      setCurrentEditTask(null);
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  return (
    <div className="p-8 h-screen bg-gradient-to-r from-black to-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Manage your Task</h1>
      <p className='text-center mb-10'>With some easy steps</p>

      {/* Add Task */}
      <div className="mb-4">
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Enter new task"
          className="border p-2 mr-2 rounded-xl text-black"
        />
        <button onClick={handleAddTask} className="bg-purple-400 text-white px-4 py-2 font-semibold rounded-xl hover:bg-purple-600">
          Add Task
        </button>
      </div>

      {/* Tasks Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className='text-black text-xl'>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-3">Task Name</th>
            <th className="border border-gray-300 px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody >
          {tasks.map((task, index) => (
            task?.name ? (
              <tr key={index} className='text-lg font-medium'>
                <td className='p-4 text-purple-400'>{task.name}</td>
                <td className='flex justify-center items-center gap-16 p-4'>                 
                  <button onClick={() => setCurrentEditTask(task.name)} className='flex justify-center items-center gap-2 hover:text-purple-400'>Edit <RiEdit2Fill /></button>                
                  <button onClick={() => handleDeleteTask(task.name)} className='flex justify-center items-center gap-2 hover:text-purple-400'>Delete <MdDelete /></button>                  
                </td>
              </tr>
            ) : null
          ))}
        </tbody>
      </table>

      {/* Edit Task */}
      {currentEditTask && (
        <div className="mt-4">
          <input
            type="text"
            value={editTaskName}
            onChange={(e) => setEditTaskName(e.target.value)}
            placeholder="Enter new task name"
            className="border p-2 mr-2 text-black rounded-xl"
          />
          <button onClick={handleEditTask} className="bg-purple-400 text-white px-4 py-2 rounded-xl">
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

export default Task
