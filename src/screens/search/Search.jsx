import { useState } from 'react';
import styles from './search.style';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';
import { HeightSpacer } from '../../components';
import { useSearchPlaces } from '../../hooks/usePlace';
import ReusableTitle from '../../components/Reusable/ReusableTitle';
import { View, TextInput, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const Search = ({ navigation }) => {
    const [searchKey, setSearchKey] = useState('');
    const { data: searchResult, isLoading, isError, error } = useSearchPlaces(searchKey);

    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        value={searchKey}
                        style={styles.input}
                        onChangeText={setSearchKey}
                        placeholder='Where do you want to visit' />
                </View>

                <TouchableOpacity style={styles.searchBtn}>
                    <Feather name='search' size={24} color={COLORS.white} />
                </TouchableOpacity>
            </View>

            {(searchResult?.length == 0 || !searchResult) ? (
                <View>
                    <HeightSpacer height={'20%'} />

                    <Image
                        style={styles.searchImage}
                        source={require('../../assets/images/search.png')}
                    />
                </View>
            ) : (
                <FlatList
                    data={searchResult}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View style={styles.tile}>
                            <ReusableTitle item={item} onPress={() => navigation.navigate('PlaceDetails', item?._id)} />
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    )
}

export default Search