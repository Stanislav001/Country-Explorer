import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import AppBar from '../../components/Reusable/AppBar';
import reusable from '../../components/Reusable/reusable';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native'
import { NetworkImage, PopularList, ReusableBtn, ReusableText, DescriptionText, HeightSpacer } from '../../components/index';

const CountryDetails = ({ navigation }) => {
    const route = useRoute();

    const { item } = route.params;

    const country = {
        "_id": "64c62bfc65af9f8c969a8d04",
        "country": "USA",
        "description": "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/1bcdbbd0-d702-475d-92ea-d9171c041674-vinci_01_places_new_york.jpg",
        "popular": [
            {
                "_id": "64c631650298a05640539adc",
                "title": "Walt Disney World",
                "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
                "rating": 4.7,
                "review": "1204 Reviews",
                "location": "Orlando, USA"
            },
            {
                "_id": "64d062a3de20d7c932f1f70a",
                "title": "Statue of Liberty",
                "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
                "rating": 4.8,
                "review": "1452 Reviews",
                "location": "Liberty Island, New York Harbor"
            }
        ],
        "region": "North America, USA"
    }

    return (
        <ScrollView>
            <View>
                <NetworkImage source={country.imageUrl} width={'100%'} height={350} borderRadius={30} />

                <AppBar
                    top={40}
                    left={20}
                    right={20}
                    icon={'search1'}
                    color={COLORS.white}
                    color1={COLORS.white}
                    title={country.country}
                    onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate('HotelSearch')}
                />
            </View>

            <View style={styles.description}>
                <ReusableText
                    family={'medium'}
                    size={TEXT.xLarge}
                    color={COLORS.black}
                    text={country.region} />

                <DescriptionText text={country.description} />

                <View style={{ alignContent: 'center' }}>
                    <HeightSpacer height={10} />

                    <View style={reusable.rowWithSpace('space-between')}>
                        <ReusableText
                            family={'medium'}
                            size={TEXT.large}
                            color={COLORS.black}
                            text={'Popular Destinations'} />

                        <TouchableOpacity onPress={() => { }}>
                            <Feather name='list' size={20} />
                        </TouchableOpacity>
                    </View>

                    <HeightSpacer height={10} />

                    <PopularList data={country.popular} />

                    <ReusableBtn
                        borderWidth={0}
                        textColor={COLORS.white}
                        width={SIZES.width - 40}
                        borderColor={COLORS.green}
                        btnText={"Find Best Hotels"}
                        backgroundColor={COLORS.green}
                        onPress={() => navigation.navigate('HotelSearch', item?._id)}
                    />

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