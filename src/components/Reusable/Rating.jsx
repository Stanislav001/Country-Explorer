import reusable from './reusable';
import WidthSpacer from './WidthSpacer';
import ReusableText from './ReusableText';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Rating = ({ rating }) => {
    return (
        <View style={reusable.rowWithSpace('flex-start')}>
            <MaterialCommunityIcons name='star' size={20} color={'#FD9942'} />
            <WidthSpacer width={5} />

            <ReusableText
                size={15}
                text={rating}
                color={'#FD9942'}
                family={'medium'} />
        </View>
    )
}

export default Rating;

const styles = StyleSheet.create({

});
