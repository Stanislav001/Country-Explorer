import { ScrollView, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Registration, Signin } from '../screens/';
import { COLORS } from '../constants/theme';
import { AssetImage, HeightSpacer } from '../components';
const Tab = createMaterialTopTabNavigator();

const AuthTabNavigator = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
                <HeightSpacer height={80} />

                <AssetImage mode={'contain'} width={'100%'} height={250} source={require('../assets/images/bg2.png')} />

                <View style={{ height: 600 }}>
                    <Tab.Navigator>
                        <Tab.Screen name='Signin' component={Signin} />
                        <Tab.Screen name='Registration' component={Registration} />
                    </Tab.Navigator>
                </View>
            </ScrollView>
        </View>
    )
}

export default AuthTabNavigator