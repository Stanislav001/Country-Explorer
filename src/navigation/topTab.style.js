import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

const styles = StyleSheet.create({
    profile: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 120,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 2,
        resizeMode: 'cover',
        borderRadius: 90,
        borderColor: COLORS.lightWhite,
    },
    info: {
        backgroundColor: COLORS.lightGrey,
        padding: 5,
        borderRadius: 12,
    }
});

export default styles;