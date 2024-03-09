import { useRoute } from '@react-navigation/native';
import AppBar from '../../components/Reusable/AppBar';
import { useGetCountry } from '../../hooks/useCountry';
import reusable from '../../components/Reusable/reusable';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import CustomSpinner from '../../components/Reusable/CustomSpinner';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native'
import { NetworkImage, PopularList, ReusableBtn, ReusableText, DescriptionText, HeightSpacer } from '../../components/index';

const CountryDetails = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;
    const { data: country, isLoading: isLoadingCountry, error: countryError, } = useGetCountry(item?._id);

    if (isLoadingCountry) {
        return <CustomSpinner />
    }

    return (
        <ScrollView>
            <View>
                <NetworkImage source={country?.imageUrl} width={'100%'} height={350} borderRadius={0} />

                <AppBar
                    top={40}
                    left={20}
                    right={20}
                    icon={'search1'}
                    color={COLORS.white}
                    color1={COLORS.white}
                    title={country?.country}
                    onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate('HotelSearch')}
                />
            </View>

            <View style={styles.description}>
                <ReusableText
                    family={'medium'}
                    size={TEXT.xLarge}
                    color={COLORS.black}
                    text={country?.region} />

                <DescriptionText text={country?.description} />

                <View style={{ alignContent: 'center' }}>
                    <HeightSpacer height={10} />

                    <View style={reusable.rowWithSpace('space-between')}>
                        <ReusableText
                            family={'medium'}
                            size={TEXT.large}
                            color={COLORS.black}
                            text={'Popular Destinations'} />
                    </View>

                    <HeightSpacer height={10} />

                    <PopularList data={country?.popular} type={'place'} />

                    <ReusableBtn
                        borderWidth={0}
                        textColor={COLORS.white}
                        width={SIZES.width - 40}
                        borderColor={COLORS.green}
                        btnText={"Find Best Hotels"}
                        backgroundColor={COLORS.green}
                        onPress={() => navigation.navigate('HotelSearch', country?._id)} />

                    <HeightSpacer height={15} />
                </View>
            </View>
        </ScrollView>
    )
}

export default CountryDetails;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        backgroundColor: '#F3F4F8',
    },
    description: {
        paddingTop: 20,
        marginHorizontal: 20,
    }
})