import { COLORS, TEXT } from '../../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text } from 'react-native';
import { HeightSpacer, NetworkImage, ReusableText } from '../../../components/index';

const Country = ({ item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('CountryDetails', { item })}>
            <View>
                <NetworkImage source={item.imageUrl} width={85} height={85} borderRadius={12} />

                <HeightSpacer height={5} />

                <ReusableText
                    align={'center'}
                    family={'medium'}
                    size={TEXT.medium}
                    text={item.country}
                    color={COLORS.black} />
            </View>
        </TouchableOpacity>
    )
}

export default Country;