import { TEXT } from '../../constants/theme';
import { StyleSheet, Text } from 'react-native';

const DescriptionText = ({ lines, text }) => {
    return (
        <Text numberOfLines={lines} style={styles.description}>{text}</Text>
    )
}

export default DescriptionText;

const styles = StyleSheet.create({
    description: {
        padding: 10,
        textAlign: 'justify',
        fontSize: TEXT.medium,
        fontFamily: 'regular',
    }
})