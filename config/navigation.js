import { createDrawerNavigator, createMaterialTopTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
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

const TabNavigator = createMaterialTopTabNavigator({
    Ads: {
        screen: Routes.Ads,
    },
    'Post Ads': {
        screen: Routes.PostAds,
    }
})

const AppNavigator = createStackNavigator({
    Home: {
        screen: TabNavigator
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