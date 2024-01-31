import { Text, StyleSheet } from 'react-native';

const ReusableText = ({ text, family, size, color, align, isMaxWidth, onOneRow }) => {
    return (
        <Text numberOfLines={onOneRow ? 1 : null} style={styles.textStyle(family, size, color, align, isMaxWidth)}>{text}</Text>
    )
}

export default ReusableText;

const styles = StyleSheet.create({
    textStyle: (family, size, color, align, isMaxWidth) => ({
        fontFamily: family,
        fontSize: size,
        color: color,
        textAlign: align,
        maxWidth: isMaxWidth ? 200 : '100%',
    })
})
