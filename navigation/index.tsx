/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import LeftHeaderComponent from '../components/LeftHeaderComponent';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AddTaskScreen from '../screens/AddTaskScreen';
import AddTemplateActionScreen from '../screens/AddTemplateActionScreen';
import AddTemplateScreen from '../screens/AddTemplateScreen';
import HistoryTab from '../screens/HistoryTab';
import InboxTab from '../screens/InboxTab';
import LoginScreen from '../screens/LoginScreen';
import ManageTeam from '../screens/ManageTeam';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import SelectDateTimeScreen from '../screens/SelectDateTimeScreen';
import SelectTemplateScreen from '../screens/SelectTemplateScreen';
import TaskTab from '../screens/TaskTab';
import TemplateTab from '../screens/TemplateTab';
import ViewArchivedTask from '../screens/ViewArchivedTask';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="AddTemplateScreen"
        component={AddTemplateScreen}
        options={{ title: 'Create new checklist' }}
      />
      <Stack.Screen name="AddTemplateActionScreen" component={AddTemplateActionScreen} />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="ManageTeam" component={ManageTeam} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="ViewArchivedTask"
          component={ViewArchivedTask}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectTemplateScreen"
          component={SelectTemplateScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectDateTimeScreen"
          component={SelectDateTimeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="InboxTab"
      screenOptions={
        {
          // tabBarActiveTintColor: Colors[colorScheme].primary,
        }
      }>
      <BottomTab.Screen
        name="InboxTab"
        component={InboxTab}
        options={({ navigation }: RootTabScreenProps<'InboxTab'>) => ({
          title: 'Inbox',
          headerStyle: { backgroundColor: 'transparent' },
          tabBarIcon: ({ color }) => <TabBarIcon name="mail" color={color} />,

          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Ionicons
                name="filter"
                size={25}
                // color={Colors[colorScheme].black}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerLeft: () => <LeftHeaderComponent />,
        })}
      />
      <BottomTab.Screen
        name="HistoryTab"
        component={HistoryTab}
        options={({ navigation }: RootTabScreenProps<'HistoryTab'>) => ({
          title: 'Archive',
          headerStyle: { backgroundColor: 'transparent' },

          tabBarIcon: ({ color }) => <TabBarIcon name="archive" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Ionicons
                name="filter"
                size={25}
                // color={Colors[colorScheme].black}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerLeft: () => <LeftHeaderComponent />,
        })}
      />
      <BottomTab.Screen
        name="TempalteTab"
        component={TemplateTab}
        options={{
          title: 'Templates',
          headerStyle: { backgroundColor: 'transparent' },
          headerLeft: () => <LeftHeaderComponent />,

          tabBarIcon: ({ color }) => <TabBarIcon name="clipboard" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TaskTab"
        component={TaskTab}
        options={{
          title: 'Schedule task',
          headerStyle: { backgroundColor: 'transparent' },
          headerLeft: () => <LeftHeaderComponent />,

          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={35} style={{ marginBottom: -3 }} {...props} />;
}
