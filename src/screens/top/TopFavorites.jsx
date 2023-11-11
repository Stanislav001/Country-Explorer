import { ReusableBtn } from '../../components';
import { ReusableText } from '../../components';
import { useAuth } from '../../context/auth-context';
import { COLORS, SIZES } from '../../constants/theme';
import hotelService from '../../services/hotelService';
import reusable from '../../components/Reusable/reusable';
import { useGetFavoriteHotels } from '../../hooks/useHotel';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ReusableTitle from '../../components/Reusable/ReusableTitle';

const TopFavorites = ({ navigation }) => {
  const { currentToken } = useAuth();
  const { data: hotels, isLoading: isLoadingHotels, error: hotelsError, refetch } = useGetFavoriteHotels(currentToken);

  if (isLoadingHotels) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
  }

  const removeFavoritesHandler = async (hotelId) => {
    await hotelService.removeFromFavorites(hotelId, currentToken);
    await refetch();
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
                btnText={"Remove"}
                borderColor={COLORS.red}
                textColor={COLORS.white}
                backgroundColor={COLORS.red}
                width={(SIZES.width - 50) / 2.2}
                onPress={() => removeFavoritesHandler(item?.hotel?._id)} />
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

export default TopFavorites