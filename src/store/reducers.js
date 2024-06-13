// src/store/reducers.js
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actions';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, { text: action.payload }] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((_, index) => index !== action.payload) };
    case EDIT_TASK:
      const updatedTasks = state.tasks.map((task, index) =>
        index === action.payload.index ? { text: action.payload.newTask } : task
      );
      return { ...state, tasks: updatedTasks };
    default:
      return state;
  }
};

export default taskReducer;
