// Main.jsx
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '/src/components/Login';
import Home from '/src/components/Home';
import asesoriasDisponibles from './AsesoriasDisponibles';

const Stack = createStackNavigator();

const Main = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AsesoriasDisponibles" component={asesoriasDisponibles} />
        </Stack.Navigator>
    );
};

export default Main;

