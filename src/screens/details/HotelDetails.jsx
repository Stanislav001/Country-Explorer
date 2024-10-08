
import styles from './hotelDetails.style';
import { useGetHotel } from '../../hooks/useHotel';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../../context/auth-context';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import hotelService from '../../services/hotelService';
import { Rating } from 'react-native-stock-star-rating';
import { Feather, AntDesign } from '@expo/vector-icons';
import reusable from '../../components/Reusable/reusable';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import CustomSpinner from '../../components/Reusable/CustomSpinner';
import { DescriptionText, HotelMap, HeightSpacer, NetworkImage, ReusableText, ReviewsList, ReusableBtn } from '../../components';

const HotelDetails = ({ navigation }) => {
    const route = useRoute();
    const id = route.params;
    const { currentToken } = useAuth();
    const { data: hotel, isLoading: isLoadingHotel, error: hotelError, refetch } = useGetHotel(id, currentToken);

    if (isLoadingHotel) {
        return <CustomSpinner />
    }

    const addToFavoritesHandler = async () => {
        await hotelService.addToFavorite(hotel?._id, currentToken);
        await refetch();
    }

    const removeFavoritesHandler = async () => {
        await hotelService.removeFromFavorites(hotel?._id, currentToken);
        await refetch();
    }

    const coordinates = {
        id: hotel?._id,
        title: hotel?.title,
        longitude: hotel?.location?.coordinates[0],
        latitude: hotel?.location?.coordinates[1],
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
                <View style={styles.imageContainer}>
                    <NetworkImage
                        height={320}
                        width={'100%'}
                        borderRadius={25}
                        source={hotel.imageUrl}
                    />

                    <TouchableOpacity
                        style={styles.favoriteIcon}
                        onPress={hotel?.isFavorite ? removeFavoritesHandler : addToFavoritesHandler}
                    >
                        {hotel?.isFavorite ? <AntDesign name="heart" size={24} color="red" /> :
                            <AntDesign name="hearto" size={24} color="red" />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.titleContainer}>
                    <View style={styles.titleColumn}>

                        <ReusableText
                            family={'medium'}
                            text={hotel.title}
                            size={SIZES.large}
                            color={COLORS.black} />

                        <HeightSpacer height={10} />

                        <ReusableText
                            family={'medium'}
                            size={SIZES.medium}
                            color={COLORS.black}
                            text={`${hotel?.address?.City}, ${hotel?.address?.Country}`} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Rating
                                maxStarts={5}
                                bordered={false}
                                color={'#FD9942'}
                                stars={hotel?.rating} />
                            <ReusableText
                                family={'medium'}
                                size={SIZES.large}
                                color={COLORS.gray}
                                text={`(${hotel?.reviews?.length}) Reviews`} />
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

                <DescriptionText text={hotel.Description || "Coming soon"} />

                <ReusableText
                    family={'medium'}
                    color={COLORS.gray}
                    text={`${hotel.address?.StreetAddress}, ${hotel.address?.City}, ${hotel.address?.Country}`}
                    size={SIZES.small + 2} />

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Bottom', { screen: 'Location', params: { id: '' }, })
                }}>
                    <HotelMap coordinates={coordinates} />
                </TouchableOpacity>

                <View style={reusable.rowWithSpace('space-between')}>
                    <ReusableText
                        text={"Reviews"}
                        family={'medium'}
                        size={SIZES.large}
                        color={COLORS.gray} />

                    {hotel?.reviews?.length !== 0 ? <TouchableOpacity onPress={() => navigation.navigate('HotelReviews', hotel?._id)}>
                        <Feather name='list' size={20} />
                    </TouchableOpacity> : null}
                </View>

                <HeightSpacer height={15} />

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
                        family={'medium'}
                        size={SIZES.medium}
                        color={COLORS.gray}
                        text={"Jan 01 - Dec 31"} />
                </View>

                <ReusableBtn
                    borderWidth={0}
                    btnText={"Select Room"}
                    borderColor={COLORS.green}
                    textColor={COLORS.white}
                    backgroundColor={COLORS.green}
                    width={(SIZES.width - 50) / 2.2}
                    onPress={() => navigation.navigate('SelectRoom', hotel._id)}
                />
            </View>
        </ScrollView >
    )
}

export default HotelDetails;
