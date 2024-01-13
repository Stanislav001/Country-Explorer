import { useState } from 'react';
import reusable from '../Reusable/reusable';
import { Feather } from '@expo/vector-icons';
import { HeightSpacer } from '../../components/index';
import { ReusableText } from '../../components/index';
import { useNavigation } from '@react-navigation/native';
import { useGetRandomPlaces } from '../../hooks/usePlace';
import { COLORS, SIZES, TEXT, } from '../../constants/theme';
import ReusableTitle from '../../components/Reusable/ReusableTitle';
import { View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

const Recommendations = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const { data: places, isLoading: isLoadingPlaces, error: placesError, } = useGetRandomPlaces();

  if (isLoadingPlaces) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
  }

  return (
    <View style={{ paddingTop: 30, }}>
      <View style={[reusable.rowWithSpace('space-between'), { paddingBottom: 5, }]}>
        <View style={[reusable.rowWithSpace('flex-start')]}>
          <ReusableText
            size={TEXT.large}
            family={'medium'}
            color={COLORS.black}
            text={'Recommendations'} />

          <TouchableOpacity onPress={() => setShow(!show)}>
            <Feather name={show ? 'minus' : 'plus'} size={20} />
          </TouchableOpacity>
        </View>

        {show ? <TouchableOpacity style={{ marginLeft: 3 }} onPress={() => navigation.navigate('Recommended')}>
          <Feather name='list' size={20} />
        </TouchableOpacity> : null}
      </View>

      <HeightSpacer height={5} />

      {show ? <FlatList
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
      /> : null}
    </View>
  )
}

export default Recommendations;