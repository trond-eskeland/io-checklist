import { computed, action, Action, Computed, Thunk, thunk } from 'easy-peasy';
import { Alert } from 'react-native';

import { createUser, setUsername, postFeedback, getUser } from '../services/api';
import { Feedback, Settings, User } from '../types';

export interface SettingsModel {
  fetching: boolean;
  setFetching: Action<SettingsModel, boolean>;
  isOnline: boolean;
  setIsOnline: Action<SettingsModel, boolean>;
  settings: Settings;
  setSettings: Action<SettingsModel, Settings>;
  user: User | undefined;
  setUser: Action<SettingsModel, User>;
  createUserIfNeeded: Thunk<SettingsModel, void>;
  setUsername: Thunk<SettingsModel, { username: string; showAlert: boolean }>;
  postFeedback: Thunk<
    SettingsModel,
    { feedback: Feedback; meta: { screen: string; extra?: string } }
  >;
}

const defaultSettings: Settings = {
  darkMode: false,
};

const store: SettingsModel = {
  isOnline: true,
  user: undefined,
  setIsOnline: action((state, payload) => {
    state.isOnline = payload;
  }),
  fetching: false,
  setFetching: action((state, payload) => {
    state.fetching = payload;
  }),
  settings: { ...defaultSettings },
  setSettings: action((state, payload) => {
    state.settings = {
      ...payload,
    };
  }),
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  createUserIfNeeded: thunk(async (actions, payload, { getState }) => {
    try {
      const state = getState();

      if (!state.user || !state.user?.uniqId) {
        const result = await createUser({});
        actions.setUser(result);
      } else {
        const result = await getUser(state.user);
        actions.setUser(result);
      }
    } catch (e) {
      console.log(e);
    }
  }),
  setUsername: thunk(async (actions, payload, { getState }) => {
    try {
      const state = getState();

      if (state.user) {
        const result = await setUsername(state.user, payload.username);

        actions.setUser(result);

        if (payload.showAlert) {
          Alert.alert('Brukernavn endret');
        }
      }
    } catch (e) {
      if (payload.showAlert) {
        Alert.alert('Det oppsto en feil!');
      }
      console.log(e);
    }
  }),
  postFeedback: thunk(async (actions, payload, { getState }) => {
    try {
      const state = getState();

      const user = state.user;

      const userDetails =
        `# User: ${user?.username} | ${user?.uniqId} | ${user?.id}\n` +
        `# Screen: ${payload.meta.screen} - ${payload.meta.extra}\n` +
        '\n\n';

      const feedback = {
        ...payload.feedback,
        message: userDetails + payload.feedback.message,
      };
      const result = await postFeedback(feedback);

      Alert.alert('Tilbakemelding sendt!');
    } catch (e) {
      Alert.alert('Det oppsto en feil!');
      console.log(e);
    }
  }),
};

export default store;
