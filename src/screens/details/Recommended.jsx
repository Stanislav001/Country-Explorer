import { useGetPlaces } from '../../hooks/usePlace';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import useRefreshControl from '../../hooks/useRefreshControl';
import ReusableTitle from '../../components/Reusable/ReusableTitle';
import CustomSpinner from '../../components/Reusable/CustomSpinner';
import { View, FlatList, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';

const Recommended = ({ navigation }) => {
  const { data: places, isLoading: isLoadingPlaces, error: placesError, refetch } = useGetPlaces();
  const { refreshing, onRefresh } = useRefreshControl(refetch);

  if (isLoadingPlaces) {
    return <CustomSpinner />
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

      <View style={{ paddingTop: 20, marginBottom: 100 }}>
        <FlatList
          data={places}
          keyExtractor={(item) => item._id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTitle item={item} type={"place"} onPress={() => navigation.navigate('PlaceDetails', item._id)} />
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

export default Recommended