import { useRoute } from '@react-navigation/native';
import { useGetReviews } from '../../hooks/useHotel';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import { ReviewsList, HeightSpacer } from '../../components';
import { View, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';

const HotelReviews = ({ navigation }) => {
    const route = useRoute();
    const id = route.params;
    const { data: reviews, isLoading: isLoadingHotels, error: hotelsError, } = useGetReviews(id);

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

            <ScrollView>
                <ReviewsList reviews={reviews} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HotelReviews