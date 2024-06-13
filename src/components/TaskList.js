// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../store/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleEdit = (index) => {
    const newTask = prompt('Edit Task:', tasks[index].text);
    if (newTask !== null) {
      dispatch(editTask(index, newTask));
    }
  };

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <span>{task.text}</span>
          <div>
            <button className="btn btn-info btn-sm me-2" onClick={() => handleEdit(index)}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTask(index))}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
