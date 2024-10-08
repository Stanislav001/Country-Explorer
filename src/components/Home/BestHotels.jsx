import reusable from '../Reusable/reusable';
import { Feather } from '@expo/vector-icons';
import HotelCard from '../Tiles/Hotels/HotelCard';
import ReusableText from '../Reusable/ReusableText';
import HeightSpacer from '../Reusable/HeightSpacer';
import { useNavigation } from '@react-navigation/native';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import { View, TouchableOpacity, FlatList } from 'react-native';

const BestHotels = ({ hotels }) => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={[reusable.rowWithSpace('space-between')]}>
                <ReusableText
                    size={TEXT.large}
                    family={'medium'}
                    color={COLORS.black}
                    text={'Recommended Hotels'} />

                <TouchableOpacity onPress={() => navigation.navigate('HotelList')}>
                    <Feather name='list' size={20} />
                </TouchableOpacity>
            </View>

            <HeightSpacer height={10} />

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