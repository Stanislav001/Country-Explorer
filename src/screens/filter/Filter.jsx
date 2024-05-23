import { useState } from 'react';
import styles from './filter.styles';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import hotelService from '../../services/hotelService';
import reusable from '../../components/Reusable/reusable';
import CustomSlider from '../../components/Reusable/CustomSlider';
import { DescriptionText, ReusableBtn, ReusableText } from '../../components';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const ratingData = [1, 2, 3, 4, 5];
const amenitiesData = [
    { text: '24h Front-Desk', icon: <AntDesign name="infocirlceo" size={18} color="black" /> },
    { text: 'Free Parking', icon: <MaterialCommunityIcons name="parking" size={18} color="black" /> },
    { text: 'Free Wi-Fi Zone', icon: <AntDesign name="wifi" size={18} color="black" /> },
    { text: 'Pub Restaurant', icon: <AntDesign name="rest" size={18} color="black" /> },
];

const Filter = ({ navigation }) => {
    const [priceRange, setPriceRange] = useState([50, 200]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [selectedStarOption, setSelectedStarOption] = useState('');

    const toggleAmenitySelection = (amenity) => {
        if (selectedAmenities.includes(amenity)) {
            setSelectedAmenities(prevSelection => prevSelection.filter(item => item !== amenity));
        } else {
            setSelectedAmenities(prevSelection => [...prevSelection, amenity]);
        }
    };

    const applyFilterHandler = async () => {
        const resultData = await hotelService.filterHotel(priceRange[0], priceRange[1], selectedStarOption, selectedAmenities);

        navigation.navigate('HotelSearch', { resultData })
    }

    const handleSliderChange = (values) => setPriceRange(values);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 50 }}>
                <AppBar
                    top={10}
                    left={20}
                    right={20}
                    title={'Hotel Filter'}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <ScrollView style={styles.container}>
                <DescriptionText text={'Tailor your hotel search effortlessly by adjusting filters such as price range, amenities, and location. Find the perfect accommodation that suits your preferences and budget, ensuring a personalized and enjoyable travel experience'} />

                <View style={{ padding: 10 }}>
                    <ReusableText
                        family={'regular'}
                        size={SIZES.large}
                        color={COLORS.gray}
                        text={'Price Range'} />

                    <CustomSlider handleSliderChange={handleSliderChange} priceRange={priceRange} />

                    <View style={{ borderBottomColor: COLORS.lightGrey, marginVertical: 15, borderBottomWidth: 1 }} />

                    <ReusableText
                        family={'regular'}
                        size={SIZES.large}
                        color={COLORS.gray}
                        text={'Star Rating'} />

                    <View style={reusable.rowWithSpace('center')}>
                        {ratingData.map((data, index) => (
                            <TouchableOpacity key={index} style={styles.rectangle(data === selectedStarOption)} onPress={() => setSelectedStarOption((prevOption) => (prevOption === data ? '' : data))}>
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
                            <TouchableOpacity key={index} style={{ alignItems: 'center' }} onPress={() => toggleAmenitySelection(data?.text)}>
                                <View style={styles.circle(selectedAmenities.includes(data?.text))}>
                                    {data?.icon}
                                </View>
                                <Text style={styles.text}>{data?.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={{ borderBottomColor: COLORS.lightGrey, marginVertical: 15, borderBottomWidth: 1 }} />
                </View>

                <ReusableBtn
                    borderWidth={0}
                    textColor={COLORS.white}
                    width={SIZES.width - 40}
                    borderColor={COLORS.green}
                    btnText={"Apply"}
                    backgroundColor={COLORS.green}
                    onPress={() => applyFilterHandler()}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Filter