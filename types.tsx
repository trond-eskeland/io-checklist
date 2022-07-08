/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  ManageTeam: undefined;
  ViewArchivedTask: undefined;
  AddTemplateScreen: { id?: string };
  AddTemplateActionScreen: { id?: string };
  NotFound: undefined;
  Login: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  InboxTab: undefined;
  HistoryTab: undefined;
  TempalteTab: undefined;
  TaskTab: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type Feedback = {
  isPositive: boolean;
  message: string;
};

export type Settings = {
  darkMode: boolean;
};

export type User = {
  username: string;
  id: string;
  uniqId: string;
};

export type TemplateActionOption = { type: 'checkbox' } | { type: 'input'; multiLine: boolean };
export interface TemplateAction {
  title?: string;
  options: TemplateActionOption;
  value?: string | number | boolean;
}
export interface Template {
  id?: string;
  name?: string;
  actions?: TemplateAction[];
}
