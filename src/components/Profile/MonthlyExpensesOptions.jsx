import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const MonthlyExpensesOptions = ({ selectedDuration, onSelect }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onSelect('3 months')} style={[styles.option, selectedDuration === '3 months' ? styles.selectedOption : styles.option]}>
                <Text style={styles.optionText}>3 Months</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSelect('6 months')} style={[styles.option, selectedDuration === '6 months' ? styles.selectedOption : styles.option]}>
                <Text style={styles.optionText}>6 Months</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSelect('This Year')} style={[styles.option, selectedDuration === 'This Year' ? styles.selectedOption : styles.option]}>
                <Text style={styles.optionText}>This Year</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: SIZES.medium,
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.lightGrey,
    },
    option: {
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.lightGray,
    },
    selectedOption: {
        backgroundColor: COLORS.gray,
    },
    optionText: {
        color: COLORS.black,
    },
});

export default MonthlyExpensesOptions;