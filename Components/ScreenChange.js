import React from 'react';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const ScreenChange = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Profile: {
        screen: ProfileScreen
    }
},{
    initialRouteName : 'Home'
});

const ParentScreen= createAppContainer(ScreenChange);
export default ParentScreen;