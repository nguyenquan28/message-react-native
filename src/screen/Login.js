import React from 'react'
import { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Login = ({ navigation }) => {
    const [userName, setUseName] = useState()
    const [password, setPassword] = useState()

    const onLogin = () => {
        navigation.replace('Home')
    }

    return (
        <View>
            <TextInput
                placeholder='Username'
                onChange={(text) => setUseName(text)}
            />
            <TextInput
                placeholder='Password'
                onChange={(text) => setPassword(text)}
            />

            <TouchableOpacity onPress={() => onLogin()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login