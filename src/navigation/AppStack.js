import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Profiler } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chat from '../screen/Home';
import Profile from '../screen/Profile'
import Story from '../screen/Story';

const AppStack = () => {

    // Create Tab navigator
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator()

    // Tabs Home
    const Home = () => {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name='Chat'
                    component={Chat}
                />
                <Stack.Screen
                    name='Profile'
                    component={Profile}
                />
            </Stack.Navigator>
        )
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
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
                activeTintColor: '#FF89C0',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
            />
            <Tab.Screen
                name='Story'
                component={Story}
            />
        </Tab.Navigator>
    )
}

export default AppStack