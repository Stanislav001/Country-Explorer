import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Profile, Chat, Success, Failed, Location } from '../screens';
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/theme';
import TopTab from './TopTab';
import AuthTabNavigator from './AuthTabNavigator';
const Tab = createBottomTabNavigator();

const tabBarStyle = {
    left: 20,
    right: 20,
    height: 60,
    bottom: 20,
    borderRadius: 20,
    position: 'absolute',
    alignItems: 'center',
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            headerShown={false}
            initialRouteName='Home'
            activityColor='#EB6A58'
            inactiveColor='#3e2465'
            tabBarHideKeyBoard={true}
            barStyle={{ paddingBottom: 48 }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'grid' : 'grid-outline'} color={focused ? COLORS.red : COLORS.gray} size={26} />
                    )
                }} />

            <Tab.Screen
                name='Location'
                component={Location}
                options={{
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'location' : 'location-outline'} color={focused ? COLORS.red : COLORS.gray} size={26} />
                    )
                }} />

            <Tab.Screen
                name='Chat'
                component={Chat}
                options={{
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'} color={focused ? COLORS.red : COLORS.gray} size={26} />
                    )
                }} />

            <Tab.Screen
                name='Profile'
                component={TopTab}
                options={{
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'person' : 'person-outline'} color={focused ? COLORS.red : COLORS.gray} size={26} />
                    )
                }} />
        </Tab.Navigator >
    )
}

export default BottomTabNavigation