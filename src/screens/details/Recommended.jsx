import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import ReusableTitle from '../../components/Reusable/ReusableTitle';
import { View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';

import { useGetPlaces } from '../../hooks/usePlace';

const Recommended = ({ navigation }) => {
  const { data: places, isLoading: isLoadingPlaces, error: placesError, } = useGetPlaces();

  if (isLoadingPlaces) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
  }

  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
          top={10}
          left={0}
          right={0}
          icon={'search1'}
          color={COLORS.white}
          color1={COLORS.white}
          title={'Recommendations'}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate('Search')}
        />
      </View>

      <View style={{ paddingTop: 20 }}>
        <FlatList
          data={places}
          keyExtractor={(item) => item._id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTitle item={item} onPress={() => navigation.navigate('PlaceDetails', item._id)} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Recommended