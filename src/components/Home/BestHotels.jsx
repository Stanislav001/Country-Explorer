import reusable from '../Reusable/reusable';
import { Feather } from '@expo/vector-icons';
import HotelCard from '../Tiles/Hotels/HotelCard';
import ReusableText from '../Reusable/ReusableText';
import { useGetLimitHotels } from '../../hooks/useHotel';
import { useNavigation } from '@react-navigation/native';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import { View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

const BestHotels = () => {
    const navigation = useNavigation();
    const { data: hotels, isLoading: isLoadingHotels, error: hotelsError, } = useGetLimitHotels();

    if (isLoadingHotels) {
        return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
    }

    return (
        <View>
            <View style={[reusable.rowWithSpace('space-between')]}>
                <ReusableText
                    size={TEXT.large}
                    family={'medium'}
                    color={COLORS.black}
                    text={'Popular Hotels'} />

                <TouchableOpacity onPress={() => navigation.navigate('HotelList')}>
                    <Feather name='list' size={20} />
                </TouchableOpacity>
            </View>

            <FlatList
                horizontal
                data={hotels}
                keyExtractor={(item) => item._id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                renderItem={({ item }) => (
                    <HotelCard item={item} margin={10} onPress={() => navigation.navigate('HotelDetails', item._id)} />
                )}
            />
        </View>
    )
}

export default BestHotels;