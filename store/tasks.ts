import { computed, action, Action, Computed, Thunk, thunk } from 'easy-peasy';
import { Alert } from 'react-native';

import { createUser, setUsername, postFeedback, getUser } from '../services/api';
import { Feedback, Settings, Task, Template, TemplateAction, User } from '../types';

export interface TasksModel {
  fetching: boolean;
  setFetching: Action<TasksModel, boolean>;
  newTask: Task;
  setNewTask: Action<TasksModel, Task>;
  tasks: Task[];
  beginEditTask: Action<TasksModel, { id: string }>;
  saveTask: Action<TasksModel, Task>;
  removeTask: Action<TasksModel, { id: string }>;
  data: any[];
}

const store: TasksModel = {
  fetching: false,
  setFetching: action((state, payload) => {
    state.fetching = payload;
  }),
  data: [],
  newTask: { id: '' },
  setNewTask: action((state, payload) => {
    state.newTask = payload;
  }),
  tasks: [],
  saveTask: action((state, payload) => {
    const index = state.tasks.findIndex((item) => item.id === payload.id);
    if (index > -1) {
      state.tasks[index] = payload;
    } else {
      state.tasks.push(payload);
    }
  }),
  beginEditTask: action((state, payload) => {
    const template = state.tasks.find((item) => item.id === payload.id);

    state.newTask = template || { id: '' };
  }),
  removeTask: action((state, payload) => {
    state.tasks = state.tasks.filter((item) => item.id !== payload.id);
  }),
};

export default store;
