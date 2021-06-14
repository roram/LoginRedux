import React from 'react';
import NavigatorConstant from './NavigatorConstant';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginStackNavigator from './LoginStackNavigator';

const Stack = createStackNavigator();

const RootNavigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName={NavigatorConstant.NAVIGATOR.LOGIN_FLOW}
            screenOptions={{
                headerShown:false
            }}
            >
                <Stack.Screen
                name={NavigatorConstant.NAVIGATOR.LOGIN_FLOW}
                component={LoginStackNavigator}
                
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;