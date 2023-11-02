import { View } from 'react-native';
import ReusableTitle from '../Reusable/ReusableTitle';
import { useNavigation } from '@react-navigation/native';

const PopularList = ({ data, type, location }) => {
    const navigation = useNavigation();

    return (
        <View>
            {data.map(item => (
                <View style={{ marginBottom: 10 }} key={item._id}>
                    <ReusableTitle
                        item={{
                            ...item,
                            ...(location ? { location } : {}),
                        }}
                        onPress={() => {
                            type === 'hotel'
                                ? navigation.navigate('HotelDetails', item._id)
                                : navigation.navigate('PlaceDetails', item._id);
                        }}
                    />

                </View>
            ))}
        </View>
    )
}

export default PopularList;