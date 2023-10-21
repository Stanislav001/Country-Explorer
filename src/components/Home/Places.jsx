import Country from '../Tiles/Country/Country';
import { HeightSpacer } from '../../components/index';
import { COLORS, SIZES } from '../../constants/theme';
import { useGetCountries } from '../../hooks/useCountry';
import { VirtualizedList, View, ActivityIndicator } from 'react-native';

const Places = () => {
    const { data: countries, isLoading: isLoadingCountries, error: countriesError, } = useGetCountries();

    if (isLoadingCountries) {
        return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
    }

    return (
        <View>
            <HeightSpacer height={5} />

            <VirtualizedList
                data={countries}
                horizontal
                keyExtractor={(item) => item._id}
                getItemCount={(data) => data?.length}
                showsHorizontalScrollIndicator={false}
                getItem={(data, index) => data[index]}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: SIZES.medium }}>
                        <Country item={item} />
                    </View>
                )}
            />
        </View>
    )
}

export default Places;