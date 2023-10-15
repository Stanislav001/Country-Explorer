import reusable from '../Reusable/reusable';
import { Feather } from '@expo/vector-icons';
import fetchPlaces from '../../hooks/fetchPlaces';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, TEXT, } from '../../constants/theme';
import { ReusableText, ReusableTitle } from '../../components/index';
import { View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

const Recommendations = () => {
  const navigation = useNavigation();
  const { places, isLoading, error, refetch } = fetchPlaces();

  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
  }

  return (
    <View style={{ paddingTop: 30, }}>
      <View style={[reusable.rowWithSpace('space-between'), { paddingBottom: 5 }]}>
        <ReusableText
          size={TEXT.large}
          family={'medium'}
          color={COLORS.black}
          text={'Recommendations'} />

        <TouchableOpacity onPress={() => navigation.navigate('Recommended')}>
          <Feather name='list' size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={places}
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => (
          <View style={{ marginRight: SIZES.medium }}>
            <ReusableTitle item={item} onPress={() => navigation.navigate('PlaceDetails', item._id)} />
          </View>

        )}
      />
    </View>
  )
}

export default Recommendations;