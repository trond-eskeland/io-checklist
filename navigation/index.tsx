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
import EditTemplateScreen from '../screens/EditTemplateScreen';
import HistoryTab from '../screens/HistoryTab';
import InboxTab from '../screens/InboxTab';
import ManageTeam from '../screens/ManageTeam';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TaskTab from '../screens/TaskTab';
import TemplateTab from '../screens/TemplateTab';
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
        name="EditTemplateScreen"
        component={EditTemplateScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="ManageTeam" component={ManageTeam} />
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
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].primary,
      }}>
      <BottomTab.Screen
        name="InboxTab"
        component={InboxTab}
        options={({ navigation }: RootTabScreenProps<'InboxTab'>) => ({
          title: 'Inbox',
          headerStyle: { backgroundColor: 'transparent' },
          tabBarIcon: ({ color }) => <TabBarIcon name="mail-outline" color={color} />,

          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Ionicons
                name="filter"
                size={25}
                color={Colors[colorScheme].black}
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
        options={{
          title: 'Archive',
          headerStyle: { backgroundColor: 'transparent' },

          tabBarIcon: ({ color }) => <TabBarIcon name="archive-outline" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Ionicons
                name="filter"
                size={25}
                color={Colors[colorScheme].black}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerLeft: () => <LeftHeaderComponent />,
        }}
      />
      <BottomTab.Screen
        name="TempalteTab"
        component={TemplateTab}
        options={{
          title: 'Templates',
          headerStyle: { backgroundColor: 'transparent' },
          headerLeft: () => <LeftHeaderComponent />,

          tabBarIcon: ({ color }) => <TabBarIcon name="clipboard-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TaskTab"
        component={TaskTab}
        options={{
          title: 'Schedule task',
          headerStyle: { backgroundColor: 'transparent' },
          headerLeft: () => <LeftHeaderComponent />,

          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
