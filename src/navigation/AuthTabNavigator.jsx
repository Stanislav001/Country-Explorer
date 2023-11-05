import { COLORS } from '../constants/theme';
import { ScrollView, View } from 'react-native'
import { Registration, Signin } from '../screens/';
import { AssetImage, HeightSpacer } from '../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();

const AuthTabNavigator = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
                <HeightSpacer height={80} />

                <AssetImage mode={'contain'} width={'100%'} height={250} source={require('../assets/images/bg2.png')} />

                <View style={{ height: 600 }}>

                    <Tab.Navigator>
                        <Tab.Screen name='Sign in' component={Signin} options={{ headerShown: false }} />
                        <Tab.Screen name='Registration' component={Registration} options={{ headerShown: false }} />
                    </Tab.Navigator>
                </View>
            </ScrollView>
        </View>
    )
}

export default AuthTabNavigator