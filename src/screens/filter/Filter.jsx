import { useState } from 'react';
import styles from './filter.styles';
import AppBar from '../../components/Reusable/AppBar';
import { useSearchHotels } from '../../hooks/useHotel';
import { useSearchPlaces } from '../../hooks/usePlace';
import reusable from '../../components/Reusable/reusable';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { DescriptionText, ReusableBtn, ReusableText } from '../../components';
import { AntDesign, FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const rectanglesData = [1, 2, 3, 4, 5];
const amenitiesData = [
    { text: '24h Front-Desk', icon: <AntDesign name="infocirlceo" size={18} color="black" /> },
    { text: 'Free Parking', icon: <MaterialCommunityIcons name="parking" size={18} color="black" /> },
    { text: 'Free Wi-Fi Zone', icon: <AntDesign name="wifi" size={18} color="black" /> },
    { text: 'Pub Restaurant', icon: <Ionicons name="md-restaurant-sharp" size={18} color="black" /> },
];

const Filter = ({ navigation }) => {
    const [searchKey, setSearchKey] = useState('');
    const [selectedAmenities, setSelectedAmenities] = useState('');
    const [selectedStarOption, setSelectedStarOption] = useState('');
    const { data: searchResult, isLoading, isError, error } = useSearchPlaces(searchKey);

    return (
        <SafeAreaView>
            <View style={{ height: 50 }}>
                <AppBar
                    top={20}
                    left={20}
                    right={20}
                    title={'Hotel Filter'}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={styles.container}>
                <DescriptionText text={'Tailor your hotel search effortlessly by adjusting filters such as price range, amenities, and location. Find the perfect accommodation that suits your preferences and budget, ensuring a personalized and enjoyable travel experience'} />

                <View style={{ padding: 10 }}>
                    <ReusableText
                        family={'regular'}
                        size={SIZES.large}
                        color={COLORS.gray}
                        text={'Price Range'} />

                    <View style={{ borderBottomColor: COLORS.lightGrey, marginVertical: 15, borderBottomWidth: 1 }} />

                    <ReusableText
                        family={'regular'}
                        size={SIZES.large}
                        color={COLORS.gray}
                        text={'Star Rating'} />

                    <View style={reusable.rowWithSpace('center')}>
                        {rectanglesData.map((data, index) => (
                            <TouchableOpacity key={index} style={styles.rectangle(data === selectedStarOption)} onPress={() => setSelectedStarOption(data)}>
                                <ReusableText
                                    text={data}
                                    family={'regular'}
                                    size={SIZES.medium}
                                    color={COLORS.black} />
                                <FontAwesome name="star" size={18} color="yellow" />
                            </TouchableOpacity>))}
                    </View>

                    <View style={{ borderBottomColor: COLORS.lightGrey, marginVertical: 15, borderBottomWidth: 1 }} />

                    <ReusableText
                        family={'regular'}
                        size={SIZES.large}
                        color={COLORS.gray}
                        text={'Amenities & Facilities'} />

                    <View style={reusable.rowWithSpace('center')}>
                        {amenitiesData?.map((data, index) => (
                            <TouchableOpacity key={index} style={{ alignItems: 'center' }} onPress={() => setSelectedAmenities(data?.text)}>
                                <View style={styles.circle(selectedAmenities === data?.text)}>
                                    {data?.icon}
                                </View>
                                <Text style={styles.text}>{data?.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={{ borderBottomColor: COLORS.lightGrey, marginVertical: 15, borderBottomWidth: 1 }} />

                    <ReusableBtn
                        borderWidth={0}
                        textColor={COLORS.white}
                        width={SIZES.width - 40}
                        borderColor={COLORS.green}
                        btnText={"Apply"}
                        backgroundColor={COLORS.green}
                        onPress={() => { }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Filter