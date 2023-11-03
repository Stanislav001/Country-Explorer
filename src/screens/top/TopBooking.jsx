import { ReusableBtn } from '../../components';
import { useAuth } from '../../context/auth-context';
import { COLORS, SIZES } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable';
import { useGetBookingData } from '../../hooks/useBooking';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ReusableTitle from '../../components/Reusable/ReusableTitle';
import { ReusableText } from '../../components';

const TopBooking = ({ navigation }) => {
    const { currentToken } = useAuth();
    const { data: hotels, isLoading: isLoadingHotels, error: hotelsError, } = useGetBookingData(currentToken);

    if (isLoadingHotels) {
        return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
    }

    return (
        <View style={{ margin: 20, marginBottom: 100 }}>
            <FlatList
                data={hotels}
                keyExtractor={(item) => item._id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: COLORS.lightWhite, marginBottom: 10, borderRadius: 16, }}>
                        <ReusableTitle item={item?.hotel} />
                        <View style={[reusable.rowWithSpace('space-between'), { padding: 10 }]}>
                            <ReusableBtn
                                borderWidth={1}
                                btnText={"Details"}
                                borderColor={COLORS.lightBlue}
                                textColor={COLORS.lightBlue}
                                width={(SIZES.width - 50) / 2.2}
                                onPress={() => navigation.navigate('HotelDetails', item?.hotel?._id)} />

                            <ReusableBtn
                                borderWidth={0}
                                btnText={"Cancel"}
                                borderColor={COLORS.red}
                                textColor={COLORS.white}
                                backgroundColor={COLORS.red}
                                width={(SIZES.width - 50) / 2.2}
                                onPress={() => navigation.navigate('Bottom')} />
                        </View>
                    </View>
                )}
                ListFooterComponent={(
                    (hotels?.length === 0 && !isLoadingHotels) ?
                        <View style={{ marginBottom: 10 }}>
                            <ReusableText
                                family={'regular'}
                                size={SIZES.medium}
                                color={COLORS.black}
                                text={"You don't have any reservations saved yet"} />
                        </View>
                        : null
                )}
            />
        </View>
    )
}

export default TopBooking;