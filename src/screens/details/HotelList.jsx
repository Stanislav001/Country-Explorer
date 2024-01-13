import { useCallback, useState } from 'react';
import { useGetHotels } from '../../hooks/useHotel';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import ReusableTitle from '../../components/Reusable/ReusableTitle';
import { View, FlatList, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const HotelList = ({ navigation }) => {
    const { data: hotels, isLoading: isLoadingHotels, error: hotelsError, refetch } = useGetHotels();

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
                    top={10}
                    left={0}
                    right={0}
                    title={'Hotels'}
                    icon={'search1'}
                    color={COLORS.white}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate('HotelSearch')}
                />
            </View>

            <View style={{ paddingTop: 20 }}>
                <FlatList
                    data={hotels}
                    keyExtractor={(item) => item._id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: 10 }}>
                            <ReusableTitle item={item} onPress={() => navigation.navigate('HotelDetails', item?._id)} />
                        </View>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default HotelList