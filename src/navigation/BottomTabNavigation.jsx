
import TopTab from './TopTab';
import { COLORS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons'
import { Home, Location } from '../screens';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const tabBarStyle = {
    left: 20,
    right: 20,
    height: 60,
    bottom: 20,
    borderRadius: 20,
    position: 'absolute',
    alignItems: 'center',
    paddingBottom: 0
}

const BottomTabNavigation = ({ route }) => {
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
                    tabBarStyle: getFocusedRouteNameFromRoute(route) === 'Location' ? { display: 'none' } : tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'location' : 'location-outline'} color={focused ? COLORS.red : COLORS.gray} size={26} />
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