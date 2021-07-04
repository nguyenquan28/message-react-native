import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ForgotPassword from '../screen/ForgotPassword';
import Login from '../screen/Login';
import Register from '../screen/Register';
import AppStack from './AppStack';

// Create Stack navigator
const Stack = createStackNavigator();

const AuthStack = () => {

    return (

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
                name='Register'
                component={Register}
            />
            <Stack.Screen
                name='Home'
                component={AppStack}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
