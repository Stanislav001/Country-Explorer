import { FlatList, View } from 'react-native';
import ReusableTitle from '../Reusable/ReusableTitle';
import { useNavigation } from '@react-navigation/native';

const PopularList = ({ data }) => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={{ marginBottom: 10 }}>
            <ReusableTitle item={item} onPress={() => navigation.navigate('PlaceDetails', item?._id)} />
        </View>
    );

    return (
        <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default PopularList;