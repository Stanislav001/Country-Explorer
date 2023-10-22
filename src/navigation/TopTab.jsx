import { View, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopBooking, TopInfo, TopTrips } from '../screens';
import { COLORS, SIZES } from '../constants/theme';
import { HeightSpacer, NetworkImage, ReusableText } from '../components';
import AppBar from '../components/Reusable/AppBar';
import styles from './topTab.style';
import { useAuth } from '../context/auth-context';


const Tab = createMaterialTopTabNavigator();

const TopTab = ({ navigation }) => {
    const { currentUser, logoutHandler } = useAuth();

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: COLORS.lightWhite }}>
                <View>
                    <NetworkImage
                        source={'https://d326fntlu7tb1e.cloudfront.net/uploads/005cd529-6605-4bb9-8d8f-9475bf308f67-vinci_06.jpg'}
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
                                text={'email@gmail.com'}
                                size={SIZES.medium}
                                color={COLORS.white} />
                        </View>
                    </View>
                </View>
            </View>

            <Tab.Navigator>
                <Tab.Screen name='Bookings' component={TopBooking} />
                <Tab.Screen name='Trips' component={TopTrips} />
                <Tab.Screen name='Info' component={TopInfo} />
            </Tab.Navigator>
        </View >
    )
}

export default TopTab;