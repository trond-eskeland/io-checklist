import { computed, action, Action, Computed, Thunk, thunk } from 'easy-peasy';
import { Alert } from 'react-native';

import { createUser, setUsername, postFeedback, getUser } from '../services/api';
import { Feedback, Settings, Template, User } from '../types';

export interface TemplatesModel {
  fetching: boolean;
  setFetching: Action<TemplatesModel, boolean>;
  addTemplate: Template | undefined;
  setAddTemplate: Action<TemplatesModel, Template>;
  data: any[];
}

const store: TemplatesModel = {
  fetching: false,
  setFetching: action((state, payload) => {
    state.fetching = payload;
  }),
  data: [],
  addTemplate: {},
  setAddTemplate: action((state, payload) => {
    state.addTemplate = payload;
  }),
};

export default store;
