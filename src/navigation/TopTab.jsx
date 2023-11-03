import styles from './topTab.style';
import { View, Image } from 'react-native';
import { useAuth } from '../context/auth-context';
import { COLORS, SIZES } from '../constants/theme';
import AppBar from '../components/Reusable/AppBar';
import { TopBooking, TopInfo, TopTrips } from '../screens';
import { HeightSpacer, NetworkImage, ReusableText } from '../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTab = ({ navigation }) => {
    const { currentUser, logoutHandler } = useAuth();

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: COLORS.lightWhite }}>
                <View>
                    <NetworkImage
                        source={'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww'}
                        width={'100%'}
                        height={300}
                        borderRadius={0}
                    />

                    <AppBar
                        top={40}
                        left={20}
                        right={20}
                        icon={'logout'}
                        onPress1={() => {
                            logoutHandler();
                            navigation.navigate('Auth')
                        }}
                        color={COLORS.white}
                        color1={COLORS.white}
                    />

                    <View style={styles.profile}>
                        <Image
                            style={styles.image}
                            source={{ uri: currentUser?.profile }} />

                        <HeightSpacer height={5} />

                        <View style={styles.info}>
                            <View style={{ alignItems: 'center' }}>
                                <ReusableText
                                    family={'medium'}
                                    text={currentUser?.username}
                                    size={SIZES.medium}
                                    color={COLORS.black} />
                            </View>
                        </View>

                        <HeightSpacer height={5} />

                        <View style={{ alignItems: 'center' }}>
                            <ReusableText
                                family={'medium'}
                                size={SIZES.medium}
                                color={COLORS.white}
                                text={currentUser?.email} />
                        </View>
                    </View>
                </View>
            </View>

            <Tab.Navigator>
                <Tab.Screen name='Bookings' component={TopBooking} />
                <Tab.Screen name='Preserved' component={TopTrips} />
                <Tab.Screen name='Info' component={TopInfo} />
            </Tab.Navigator>
        </View >
    )
}

export default TopTab;