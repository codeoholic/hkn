import React, { Component } from 'react';
import { Easing, ActivityIndicator, Animated, SafeAreaView, Share, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import {
    Home,
    Splash,
    WebViewCustom
} from './screens';

const Stack = createStackNavigator();

const App = ({ activity, url }) => {
    
    async function onShare(){
        await Share.share({
            message: 'Share HKN Story',
            url: url
        });
    }

    function activityIndicatorCustom(){
        if( activity )
            return(
                <ActivityIndicator size="small" color="#222226" />
            )
    }
    function share(){
        return(
            <TouchableOpacity activeOpacity={ 0.9 } onPress={ () => onShare() }>
                <Text>share</Text>
            </TouchableOpacity>
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
                    options={{
                        headerShown: true,
                        animationEnabled: true,
                        headerTitle: "Story",
                        headerRight: (props) => (
                            share()
                        ),
                        headerRightContainerStyle: {
                            paddingRight: 20
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const mapStateToProps = (state) => {
    const {
        
        activity,

        url

    } = state.variables;
    return {

        activity,

        url

    };
}

export default connect( mapStateToProps, null )( App )
