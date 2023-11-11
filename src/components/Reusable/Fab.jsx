import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Fab = ({ onPress, text, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.fab]}>
            <Text style={[styles.fabText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'blue',
        borderRadius: 50,
        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Fab;
