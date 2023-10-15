import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import AppBar from '../../components/Reusable/AppBar';
import reusable from '../../components/Reusable/reusable';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NetworkImage, PopularList, ReusableBtn, ReusableText, DescriptionText, HeightSpacer } from '../../components/index';

const PlaceDetails = ({ navigation }) => {
    const route = useRoute();
    const id = route.params;

    const place = {
        "_id": "64d062a3de20d7c932f1f70a",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Statue of Liberty",
        "description": "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor. This colossal statue was a gift from France to the United States and was dedicated in 1886. Standing at 305 feet tall, the statue represents Libertas, the Roman goddess of liberty, holding a torch and a tablet inscribed with the date of the American Declaration of Independence. The Statue of Liberty has welcomed countless immigrants to the USA, serving as a symbol of hope and opportunity.",
        "contact_id": "64c5d95adc7efae2a45ec376",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
        "rating": 4.8,
        "review": "1452 Reviews",
        "latitude": 40.689247,
        "longitude": -74.044502,
        "location": "Liberty Island, New York Harbor",
        "popular": [
            {
                "_id": "64c675be3cfa5e847bcd5439",
                "title": "Family-Friendly Resort",
                "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
                "rating": 4.6,
                "review": "12854 Reviews",
                "location": "Orlando, FL"
            },
            {
                "_id": "64c675793cfa5e847bcd5436",
                "title": "Urban Chic Boutique Hotel",
                "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
                "rating": 4.8,
                "review": "2312 Reviews",
                "location": "San Francisco, CA"
            }
        ]
    }

    return (
        <ScrollView>
            <View>
                <NetworkImage source={place.imageUrl} width={'100%'} height={350} borderRadius={30} />

                <AppBar
                    top={40}
                    left={20}
                    right={20}
                    icon={'search1'}
                    title={place.title}
                    color={COLORS.white}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate('HotelSearch')}
                />
            </View>

            <View style={styles.description}>
                <ReusableText
                    family={'medium'}
                    size={TEXT.large}
                    color={COLORS.black}
                    text={place.location} />

                <DescriptionText text={place.description} />

                <View style={{ alignContent: 'center' }}>
                    <View style={reusable.rowWithSpace('space-between')}>
                        <ReusableText
                            family={'medium'}
                            size={TEXT.medium}
                            color={COLORS.black}
                            text={'Popular Hotels'} />

                        <TouchableOpacity onPress={() => { }}>
                            <Feather name='list' size={20} />
                        </TouchableOpacity>
                    </View>

                    <HeightSpacer height={10} />

                    <PopularList data={place.popular} />

                    <ReusableBtn
                        borderWidth={0}
                        textColor={COLORS.white}
                        width={SIZES.width - 40}
                        borderColor={COLORS.green}
                        btnText={"Find Best Hotels"}
                        backgroundColor={COLORS.green}
                        onPress={() => navigation.navigate('HotelDetails', id)}
                    />

                    <HeightSpacer height={15} />
                </View>
            </View>
        </ScrollView>
    )
}

export default PlaceDetails;

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