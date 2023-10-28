import { useState } from 'react';
import styles from './search.style';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';
import { HeightSpacer } from '../../components';
import AppBar from '../../components/Reusable/AppBar';
import HotelCard from '../../components/Tiles/Hotels/HotelCard';
import { View, TextInput, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const HotelSearch = ({ navigation }) => {
    const [searchKey, setSearchKey] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const search = [
        {
            "_id": "64c674d23cfa5e847bcd5430",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Seaside Resort",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
            "rating": 4.9,
            "review": "1204 Reviews",
            "location": "Miami Beach, FL"
        },
        {
            "_id": "64c675183cfa5e847bcd5433",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Mountain Lodge",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
            "rating": 4.5,
            "review": "12024 Reviews",
            "location": "Aspen, CO"
        },
        {
            "_id": "64d0b5a4d3cb4985a76ac1aa",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Hotel Alpha",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/28266df3-1578-4d0d-8015-c5480f64a73d-hotel-alpha.jpeg",
            "rating": 4.7,
            "review": "1204 Reviews",
            "location": "City Center, USA"
        },
        {
            "_id": "64c675be3cfa5e847bcd5439",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Family-Friendly Resort",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
            "rating": 4.6,
            "review": "12854 Reviews",
            "location": "Orlando, FL"
        },
        {
            "_id": "64c67442776ed29f19727fd7",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Luxury Hotel 1",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
            "rating": 4.7,
            "review": "1204 Reviews",
            "location": "New York City, NY"
        }
    ]

    return (
        <SafeAreaView>
            <View style={{ height: 50 }}>
                <AppBar
                    top={20}
                    left={20}
                    right={20}
                    title={'Look for hotels'}
                    icon={'filter'}
                    color={COLORS.white}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate('HotelSearch')}
                />
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        value={searchKey}
                        style={styles.input}
                        onChangeText={setSearchKey}
                        placeholder='Where do you want to stay' />
                </View>

                <TouchableOpacity style={styles.searchBtn}>
                    <Feather name='search' size={24} color={COLORS.white} />
                </TouchableOpacity>
            </View>

            {search?.length == 0 ? (
                <View>
                    <HeightSpacer height={'20%'} />

                    <Image
                        style={styles.searchImage}
                        source={require('../../assets/images/search.png')}
                    />
                </View>
            ) : (
                <View style={{ paddingLeft: 12 }}>
                    <FlatList
                        data={search}
                        numColumns={2}
                        ItemSeparatorComponent={() => (<View style={{ height: 16 }} />)}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                            <HotelCard item={item} margin={10} />
                        )}
                    />
                </View>
            )}

        </SafeAreaView>
    )
}

export default HotelSearch;