import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginHorizontal: 20,
    },
    titleContainer: {
        left: 0,
        right: 0,
        top: 180,
        margin: 15,
        height: 140,
        borderRadius: 20,
        position: 'absolute',
        backgroundColor: COLORS.lightWhite,
    },
    titleColumn: {
        padding: 15,
    },
    bottom: {
        paddingHorizontal: 30,
        backgroundColor: COLORS.lightWhite,
        height: 90,
        paddingVertical: 20,
    }
});

export default styles;