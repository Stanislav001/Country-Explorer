import { useCallback, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useGetReviews } from '../../hooks/useHotel';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import { ReviewsList, HeightSpacer, ReviewTitle } from '../../components';
import { View, SafeAreaView, ActivityIndicator, ScrollView, RefreshControl, FlatList } from 'react-native';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const HotelReviews = ({ navigation }) => {
    const route = useRoute();
    const id = route.params;
    const { data: reviews, isLoading: isLoadingHotels, error: hotelsError, refetch } = useGetReviews(id);

    const [refreshing, setRefreshing] = useState(false)

    let onRefresh = useCallback(async () => {
        setRefreshing(true)
        await refetch();
        wait(400).then(() => setRefreshing(false));
    }, []);

    if (isLoadingHotels) {
        return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
    }

    return (
        <SafeAreaView style={{ marginHorizontal: 20 }}>
            <View style={{ height: 50 }}>
                <AppBar
                    top={20}
                    left={0}
                    right={0}
                    title={'Reviews'}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <HeightSpacer height={30} />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <View key={item._id} style={{ marginBottom: 10 }}>
                        <ReviewTitle review={item} />
                    </View>
                )}
                keyExtractor={(item) => item._id}
                ListEmptyComponent={() => (
                    <View style={{ marginBottom: 10 }}>
                        <ReusableText
                            family={'regular'}
                            size={SIZES.medium}
                            color={COLORS.black}
                            text={"There are no reviews for this hotel"}
                        />
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />

        </SafeAreaView>
    )
}

export default HotelReviews