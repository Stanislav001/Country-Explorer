import { useCallback } from 'react';
import { ReusableBtn } from '../../components';
import { ReusableText } from '../../components';
import { useAuth } from '../../context/auth-context';
import { COLORS, SIZES } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable';
import { useFocusEffect } from '@react-navigation/native';
import { useGetBookingData } from '../../hooks/useBooking';
import useRefreshControl from '../../hooks/useRefreshControl';
import { View, FlatList, RefreshControl } from 'react-native';
import CustomSpinner from '../../components/Reusable/CustomSpinner';
import ReusableTitle from '../../components/Reusable/ReusableTitle';

const TopBooking = ({ navigation }) => {
    const { currentToken } = useAuth();
    const { data: hotels, isLoading: isLoadingHotels, error: hotelsError, refetch } = useGetBookingData(currentToken);
    const { refreshing, onRefresh } = useRefreshControl(refetch);

    useFocusEffect(
        useCallback(() => {
            refetch();
        }, [refetch])
    );

    if (isLoadingHotels) {
        return <CustomSpinner />
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
                                btnText={"Add review"}
                                borderColor={COLORS.red}
                                textColor={COLORS.white}
                                backgroundColor={COLORS.red}
                                width={(SIZES.width - 50) / 2.2}
                                onPress={() => navigation.navigate('AddHotelReview', item?.hotel)} />
                        </View>
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
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