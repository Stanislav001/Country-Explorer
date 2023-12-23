import { useState } from 'react';
import styles from './filter.styles';
import { Feather } from '@expo/vector-icons';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import { HeightSpacer } from '../../components';
import AppBar from '../../components/Reusable/AppBar';
import { useSearchHotels } from '../../hooks/useHotel';
import { useSearchPlaces } from '../../hooks/usePlace';
import ReusableTitle from '../../components/Reusable/ReusableTitle';
import ReusableText from '../../components/Reusable/ReusableText';
import { DescriptionText } from '../../components';
import { View, TextInput, FlatList, TouchableOpacity, Image, SafeAreaView, } from 'react-native';
import reusable from '../../components/Reusable/reusable';

const Filter = ({ navigation }) => {
    const [searchKey, setSearchKey] = useState('');
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

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Filter