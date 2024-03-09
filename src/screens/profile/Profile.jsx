import { useState } from 'react';
import { COLORS } from '../../constants/theme';
import { useAuth } from '../../context/auth-context';
import AppBar from '../../components/Reusable/AppBar';
import { useGetMonthlyExpenses } from '../../hooks/useBooking';
import { View, ScrollView, Dimensions, Text } from 'react-native'
import CustomSpinner from '../../components/Reusable/CustomSpinner';
import { MonthlyExpensesOptions, MonthlyExpensesChart } from '../../components';

const ProfileInfo = ({ navigation }) => {
    const { currentToken } = useAuth();
    const [selectedDuration, setSelectedDuration] = useState('3 months');
    const { data: expensesData, isLoading: isExpensesData, error: expensesError } = useGetMonthlyExpenses(currentToken, selectedDuration);

    if (isExpensesData) {
        return <CustomSpinner />;
    }

    const labels = expensesData?.data?.map((monthData) => `${monthData.month}`);
    const data = expensesData?.data?.map((monthData) => Math.round(monthData.totalSpending));

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 100 }}>
                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    color={COLORS.white}
                    title={'Monthly Expenses Overview'}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MonthlyExpensesOptions selectedDuration={selectedDuration} onSelect={(duration) => setSelectedDuration(duration)} />
                </View>
            </View>

            <ScrollView horizontal>
                <MonthlyExpensesChart labels={labels} data={data} totalSpending={expensesData?.totalSpending} averageSpending={expensesData?.averageSpending} />
            </ScrollView>
        </View>
    );

}

export default ProfileInfo    