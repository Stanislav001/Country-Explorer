import reusable from './reusable';
import { View } from 'react-native';
import WidthSpacer from './WidthSpacer';
import ReusableText from './ReusableText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Rating = ({ rating }) => {
    return (
        <View style={reusable.rowWithSpace('flex-start')}>
            <MaterialCommunityIcons name='star' size={20} color={'#FD9942'} />
            <WidthSpacer width={5} />

            <ReusableText
                size={15}
                text={rating?.toFixed(1)}
                color={'#FD9942'}
                family={'medium'} />
        </View>
    )
}

export default Rating;
