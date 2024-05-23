import styles from './home.style';
import { AntDesign } from '@expo/vector-icons';
import Places from '../../components/Home/Places';
import { useAuth } from '../../context/auth-context';
import { TEXT, COLORS } from '../../constants/theme';
import { useGetCountries } from '../../hooks/useCountry';
import { useGetLimitHotels } from '../../hooks/useHotel';
import { useGetRandomPlaces } from '../../hooks/usePlace';
import reusable from '../../components/Reusable/reusable';
import BestHotels from '../../components/Home/BestHotels';
import { HeightSpacer, ReusableText } from '../../components';
import Recommendations from '../../components/Home/Recommendations';
import CustomSpinner from '../../components/Reusable/CustomSpinner';
import { View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
const Home = ({ navigation }) => {
    const { currentUser } = useAuth();

    const { data: places, isLoading: isLoadingPlaces, error: placesError, } = useGetRandomPlaces();
    const { data: hotels, isLoading: isLoadingHotels, error: hotelsError, } = useGetLimitHotels();
    const { data: countries, isLoading: isLoadingCountries, error: countriesError, } = useGetCountries();

    if (isLoadingPlaces || isLoadingHotels || isLoadingCountries) {
        // setTimeout(() => {

        // }, 300000);
        return <CustomSpinner />
    }

    return (
        <SafeAreaView style={reusable.container}>
            <StatusBar hidden={false} translucent={false} />
            <View>
                <View style={reusable.rowWithSpace('space-between')}>
                    <ReusableText
                        size={TEXT.large}
                        family={'regular'}
                        color={COLORS.black}
                        text={`Hey ${currentUser?.username}`} />

                    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Search')}>
                        <AntDesign name='search1' size={26} />
                    </TouchableOpacity>
                </View>

                <ReusableText
                    text={'Countries'}
                    size={TEXT.large}
                    family={'medium'}
                    color={COLORS.black} />

                <Places countries={countries} />

                <HeightSpacer height={5} />

                <Recommendations places={places} />

                <HeightSpacer height={15} />

                <BestHotels hotels={hotels} />
            </View>
        </SafeAreaView>
    )
}

export default Home    