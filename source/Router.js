import React, { Component } from 'react';
import { Easing, Animated, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Home,
    Splash,
    WebViewCustom
} from './screens';

const Stack = createStackNavigator();

function NavStack() {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ gestureEnabled: true }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="WebViewCustom"
                component={WebViewCustom}
                options={{ headerShown: false, animationEnabled: true }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <NavStack />
        </NavigationContainer>
    );
}
