import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import Story from './src/screen/Story';
import ForgotPassword from './src/screen/ForgotPassword';

// Create Tab navigator
const Tab = createBottomTabNavigator();

// Create Stack navigator
const Stack = createStackNavigator();

// Button Tabs
const ButtonTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Chats') {
            iconName = focused
              ? 'chatbubble-sharp'
              : 'chatbubble-outline';
          } else if (route.name === 'Story') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1877F2',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name='Chats'
        component={Home}
      />
      <Tab.Screen
        name='Story'
        component={Story}
      />
    </Tab.Navigator>
  )
}

const App = () => {

  return (

    // Stack navigator
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
        />
        <Stack.Screen
          name='Home'
          component={ButtonTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
