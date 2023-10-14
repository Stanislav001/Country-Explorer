import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SIZES } from '../../constants/theme';

const ReusableBtn = ({ onPress, btnText, textColor, width, backgroundColor, borderWidth, borderColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}
        >
            <Text style={styles.btnText(textColor)}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default ReusableBtn

const styles = StyleSheet.create({
    btnText: (textColor) => ({
        color: textColor,
        fontFamily: 'medium',
        fontSize: SIZES.medium,
    }),
    btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
        width: width,
        borderColor: borderColor,
        borderWidth: borderWidth,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        borderRadius: SIZES.small,

    }),
})