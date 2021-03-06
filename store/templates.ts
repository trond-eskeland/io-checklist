import { computed, action, Action, Computed, Thunk, thunk } from 'easy-peasy';
import { Alert } from 'react-native';

import { createUser, setUsername, postFeedback, getUser } from '../services/api';
import { Feedback, Settings, Template, TemplateAction, User } from '../types';

export interface TemplatesModel {
  fetching: boolean;
  setFetching: Action<TemplatesModel, boolean>;
  newTemplate: Template;
  setNewTemplate: Action<TemplatesModel, Template>;
  templates: Template[];
  beginEditTemplate: Action<TemplatesModel, { id: string }>;
  saveTemplate: Action<TemplatesModel, Template>;
  removeTemplate: Action<TemplatesModel, { id: string }>;
  addTemplateAction: Action<TemplatesModel, { templateId: string; action: TemplateAction }>;
  removeTemplateAction: Action<TemplatesModel, { templateId: string; action: TemplateAction }>;
  data: any[];
}

const store: TemplatesModel = {
  fetching: false,
  setFetching: action((state, payload) => {
    state.fetching = payload;
  }),
  data: [],
  newTemplate: { id: '' },
  setNewTemplate: action((state, payload) => {
    state.newTemplate = payload;
  }),
  templates: [],
  saveTemplate: action((state, payload) => {
    const index = state.templates.findIndex((item) => item.id === payload.id);
    if (index > -1) {
      state.templates[index] = payload;
    } else {
      state.templates.push(payload);
    }
  }),
  beginEditTemplate: action((state, payload) => {
    const template = state.templates.find((item) => item.id === payload.id);

    state.newTemplate = template || { id: '' };
  }),
  removeTemplate: action((state, payload) => {
    state.templates = state.templates.filter((item) => item.id !== payload.id);
  }),
  addTemplateAction: action((state, payload) => {
    state.newTemplate.actions?.push(payload.action);
  }),
  removeTemplateAction: action((state, payload) => {
    const newActions = state.newTemplate.actions?.filter((item) => item.id !== payload.action.id);

    console.log('new a', newActions);
    state.newTemplate.actions = newActions;
  }),
};

export default store;
