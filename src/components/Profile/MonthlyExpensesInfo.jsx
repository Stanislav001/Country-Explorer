import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const MonthlyExpensesInfo = ({ totalSpending, averageSpending }) => {
    return (
        <View style={styles.container}>
            <View style={styles.option}>
                <Text style={styles.optionText}>Total: {totalSpending} $</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.option}>
                <Text style={styles.optionText}>Average: {averageSpending} $</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
        borderRadius: SIZES.medium,
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.lightGrey,
        elevation: 2,
    },
    option: {
        flex: 1,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionText: {
        color: COLORS.black,
    },
    divider: {
        width: 1,
        backgroundColor: COLORS.black,
    },
});

export default MonthlyExpensesInfo;
