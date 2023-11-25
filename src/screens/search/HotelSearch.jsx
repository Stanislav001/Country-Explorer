import { useState } from 'react';
import styles from './search.style';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';
import { HeightSpacer } from '../../components';
import AppBar from '../../components/Reusable/AppBar';
import { useSearchHotels } from '../../hooks/useHotel';
import HotelCard from '../../components/Tiles/Hotels/HotelCard';
import { View, TextInput, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const HotelSearch = ({ navigation }) => {
    const [searchKey, setSearchKey] = useState('');
    const { data: searchResult, isLoading, isError, error } = useSearchHotels(searchKey);

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

            {searchResult?.length == 0 ? (
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
                        numColumns={2}
                        data={searchResult}
                        style={{ marginBottom: 300 }}
                        ItemSeparatorComponent={() => (<View style={{ height: 16 }} />)}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                            <HotelCard item={item} margin={10} onPress={() => navigation.navigate('HotelDetails', item?._id)} />
                        )}
                    />
                </View>
            )}

        </SafeAreaView>
    )
}

export default HotelSearch;