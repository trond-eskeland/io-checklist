import AsyncStorage from '@react-native-async-storage/async-storage';
import { Action, action, createStore, createTypedHooks, persist, PersistStorage } from 'easy-peasy';

import ratingState, { IRating } from './rating';
import settingsStore, { SettingsModel } from './settings';
import tasksStore, { TasksModel } from './tasks';
import templatesStore, { TemplatesModel } from './templates';

export interface StoreModel {
  rating: IRating;
  settings: SettingsModel;
  templates: TemplatesModel;
  tasks: TasksModel;
  reset: Action<any>;
}

const storage: PersistStorage = {
  getItem(key) {
    return AsyncStorage.getItem(key).then((result) => {
      if (result) {
        const json = JSON.parse(result);
        return json;
      } else {
        return null;
      }
    });
  },
  setItem(key, data) {
    return AsyncStorage.setItem(key, JSON.stringify(data));
  },
  removeItem(key) {
    return AsyncStorage.removeItem(key);
  },
};

/*
  window.requestIdleCallback = null; // 👈 The workaround. https://github.com/ctrlplusb/easy-peasy/issues/599#issuecomment-781258630
*/
// @ts-ignore
window.requestIdleCallback = null;

const store = createStore<StoreModel>({
  reset: action((state, payload) => ({
    ...{
      rating: ratingState,
      settings: settingsStore,
      templates: templatesStore,
      tasks: tasksStore,
    },
  })),
  rating: persist<IRating>(ratingState, { mergeStrategy: 'mergeDeep', storage }),
  settings: persist<SettingsModel>(settingsStore, { mergeStrategy: 'mergeDeep', storage }),
  templates: persist<TemplatesModel>(templatesStore, { mergeStrategy: 'mergeDeep', storage }),
  tasks: persist<TasksModel>(tasksStore, { mergeStrategy: 'mergeDeep', storage }),
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export default store;
