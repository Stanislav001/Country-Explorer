
import styles from './hotelDetails.style';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import { Rating } from 'react-native-stock-star-rating';
import { DescriptionText, HotelMap, HeightSpacer, NetworkImage, ReusableText, ReviewsList, WidthSpacer, ReusableBtn } from '../../components';
import reusable from '../../components/Reusable/reusable';
import { Feather } from '@expo/vector-icons';

const HotelDetails = ({ navigation }) => {

    const hotel = {
        "availability": {
            "start": "2023-08-20T00:00:00.000Z",
            "end": "2023-08-25T00:00:00.000Z"
        },
        reviews: [
            {
                "_id": "64c675793cfa5e847bcd5436",
                "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
                "rating": 4.8,
                "user": {
                    '_id': 1,
                    "username": 'Stas',
                    'profile': 'https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg'
                },
                "updatedAt": '2023-08-09'
            },
            {
                "_id": "1",
                "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
                "rating": 4.8,
                "user": {
                    '_id': 1,
                    "username": 'Stas',
                    'profile': 'https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg'
                },
                "updatedAt": '2023-08-09'
            }
        ],
        "_id": "64c675793cfa5e847bcd5436",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Urban Chic Boutique Hotel",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
        "contact": "64c5d95adc7efae2a45ec376",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
        "rating": 4.8,
        "review": "2312 Reviews",
        coordinates: {
            "latitude": 37.7749,
            "longitude": -122.4194,
        },
        "location": "San Francisco, CA",
        "price": 400,
        "facilities": [
            {
                "wifi": true,
                "_id": "64c675793cfa5e847bcd5437"
            }
        ],
        "__v": 0
    }

    const coordinates = {
        id: hotel._id,
        title: hotel.coordinates.title,
        longitude: hotel.coordinates.longitude,
        latitude: hotel.coordinates.latitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }

    return (
        <ScrollView>
            <View style={{ height: 80 }}>
                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    icon={'search1'}
                    title={hotel.title}
                    color={COLORS.white}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate('HotelSearch')}
                />
            </View>

            <View style={styles.container}>
                <NetworkImage
                    height={320}
                    width={'100%'}
                    borderRadius={25}
                    source={hotel.imageUrl} />

                <View style={styles.titleContainer}>
                    <View style={styles.titleColumn}>
                        <ReusableText
                            family={'medium'}
                            text={hotel.title}
                            size={SIZES.xLarge}
                            color={COLORS.black} />

                        <HeightSpacer height={10} />

                        <ReusableText
                            family={'medium'}
                            size={SIZES.medium}
                            color={COLORS.black}
                            text={hotel.location} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Rating
                                maxStarts={5}
                                bordered={false}
                                color={'#FD9942'}
                                stars={hotel.rating} />
                            <ReusableText
                                family={'medium'}
                                size={SIZES.large}
                                color={COLORS.gray}
                                text={`(${hotel.review})`} />
                        </View>
                    </View>
                </View>


            </View>

            <View style={[styles.container, { paddingTop: 10 }]}>
                <ReusableText
                    family={'medium'}
                    size={SIZES.large}
                    color={COLORS.gray}
                    text={'Description'} />

                <DescriptionText text={hotel.description} />

                <ReusableText
                    family={'medium'}
                    color={COLORS.gray}
                    text={hotel.location}
                    size={SIZES.small + 2} />

                <HotelMap coordinates={coordinates} />

                <View style={reusable.rowWithSpace('space-between')}>
                    <ReusableText
                        text={"Reviews"}
                        family={'medium'}
                        size={SIZES.large}
                        color={COLORS.gray} />

                    <TouchableOpacity>
                        <Feather name="list" size={20} />
                    </TouchableOpacity>
                </View>

                <HeightSpacer height={10} />

                <ReviewsList reviews={hotel?.reviews} />
            </View>

            <View style={[reusable.rowWithSpace('space-between'), styles.bottom]}>
                <View>
                    <ReusableText
                        text={`$ ${hotel.price}`}
                        family={'medium'}
                        size={SIZES.large}
                        color={COLORS.black} />

                    <HeightSpacer height={5} />

                    <ReusableText
                        text={"Jan 01 - Dec 25"}
                        family={'medium'}
                        size={SIZES.medium}
                        color={COLORS.gray} />
                </View>

                <ReusableBtn
                    borderWidth={0}
                    btnText={"Select Room"}
                    borderColor={COLORS.green}
                    textColor={COLORS.white}
                    backgroundColor={COLORS.green}
                    width={(SIZES.width - 50) / 2.2}
                    onPress={() => navigation.navigate('SelectRoom')}
                />
            </View>
        </ScrollView>
    )
}

export default HotelDetails;
