import React from 'react';
import Home from './components/Home'
import SignIn from './components/SignIn'
import AuthLoadingScreen from './components/AuthLoadingScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LiveFeed from './components/LiveFeed'
import Requests from './components/Requests'

const AppStack = createStackNavigator({Home: { screen: Home },
    LiveFeed: { screen: LiveFeed },Requests: { screen: Requests }},
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#2F95D6',
            headerTitleStyle: {
                color: "#2F95D6"            
            }
        }
      });
const AuthStack = createStackNavigator({ Signin: SignIn });

export default createAppContainer(createSwitchNavigator(
    {
        Starter: AuthLoadingScreen, 
        App: AppStack, 
        Auth: AuthStack
    }, 
    {
        initialRouteName: 'Starter'
    }
));

