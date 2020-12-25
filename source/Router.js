import React, { Component } from 'react';
import { Easing, ActivityIndicator, Animated, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import {
    Home,
    Splash,
    WebViewCustom
} from './screens';

const Stack = createStackNavigator();

const App = ({ activity }) => {
    function activityIndicatorCustom (){
        if( activity )
            return(
                <ActivityIndicator size="small" color="#222226" />
            )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ gestureEnabled: true }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        animationEnabled: false,
                        headerTitle: "HKN",
                        headerLeft: (props) => (<View/>),
                        headerRight: (props) => (
                            activityIndicatorCustom()
                        ),
                        headerRightContainerStyle: {
                            paddingRight: 20
                        }
                    }}
                />
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="WebViewCustom"
                    component={WebViewCustom}
                    options={{ headerShown: true, animationEnabled: true, headerTitle: "Story" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const mapStateToProps = (state) =>{
    const {
        
        activity

    } = state.variables;
    console.log( activity );
    return {

        activity

    };
}

export default connect( mapStateToProps, null )( App )
