import React, { Component } from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator, createBottomTabNavigator, createm, createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import * as Routes from '../screens/index'

const AuthNavigator = createStackNavigator({
    Login: {
        screen: Routes.Login,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Routes.Register,
        navigationOptions: {
            title: '',
            headerStyle: {
                backgroundColor: '#f8f9fa',
                shadowOpacity: 0,
                elevation: 0,
            },
            headerTintColor: '#39325c',
        }
    }
});

const MessageNavigator = createStackNavigator({
    Messages: {
        screen: Routes.Messages,
    },
    CreateMessages: {
        screen: Routes.CreateMessages,
    }
});

const BottomTabNavigator = createBottomTabNavigator({
    Home: {
        screen: Routes.Home,
        navigationOptions: {
            title: '',
            tabBarLabels: '',
            tabBarIcon: ({ focused }) => (
                <Image source={focused ? require('../assets/images/home-selected-24x24.png') : require('../assets/images/home-24x24.png')} />
            )
        }
    },
    Messages: {
        screen: MessageNavigator,
        navigationOptions: {
            title: '',
            tabBarLabels: '',
            tabBarIcon: ({ focused }) => (
                <Image source={focused ? require('../assets/images/messages-selected-24x24.png') : require('../assets/images/messages-24x24.png')} />
            )
        }
    },
    AddStatus: {
        screen: Routes.AddStatus,
        navigationOptions: {
            title: '',
            tabBarLabels: '',
            tabBarIcon: ({ focused }) => (
                <Image source={require('../assets/images/add-status-50x50.png')} style={{ marginBottom: 15 }} />
            )
        }
    },
    FindFriends: {
        screen: Routes.FindFriends,
        navigationOptions: {
            title: '',
            tabBarLabels: '',
            tabBarIcon: ({ focused }) => (
                <Image source={focused ? require('../assets/images/find-friends-selected-24x24.png') : require('../assets/images/find-friends-24x24.png')} />
            )
        }
    },
    Settings: {
        screen: Routes.Settings,
        navigationOptions: {
            title: '',
            tabBarLabels: '',
            tabBarIcon: ({ focused }) => (
                <Image source={focused ? require('../assets/images/settings-selected-24x24.png') : require('../assets/images/settings-24x24.png')} />
            )
        }
    },
}, { tabBarOptions: { showLabel: false, }, })

const AppNavigator = createStackNavigator({
    MainScreen: {
        screen: BottomTabNavigator,
        navigationOptions: {
            header: null
        }
    },
    // Home: {
    //     screen: Routes.Home
    // },
    Profile: {
        screen: Routes.Profile
    }
})

// const AppNavigator = createDrawerNavigator({
//     Home: {
//         screen: TabNavigator
//     },
//     Profile: {
//         screen: Routes.Profile
//     }
// },{

// })

const MainNavigator = createSwitchNavigator({
    Auth: {
        screen: AuthNavigator
    },
    App: {
        screen: AppNavigator
    }
})

export default createAppContainer(MainNavigator);