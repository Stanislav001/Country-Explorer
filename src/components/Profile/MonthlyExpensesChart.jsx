import { COLORS } from '../../constants/theme';
import { View, Dimensions, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import MonthlyExpensesInfo from './MonthlyExpensesInfo';

const MonthlyExpensesChart = ({ labels, data, totalSpending, averageSpending }) => {
    return (
        <View>
            <View style={{ padding: 5, borderRadius: 16, }}>
                <LineChart
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                data: data,
                            },
                        ],
                    }}
                    width={Dimensions.get('window').width}
                    height={220}
                    withInnerLines={false}
                    yAxisInterval={1}
                    // yAxisSuffix="$"
                    chartConfig={{
                        backgroundColor: 'transparent',
                        backgroundGradientFrom: 'transparent',
                        backgroundGradientTo: 'transparent',
                        backgroundGradientToOpacity: 0,
                        backgroundGradientFromOpacity: 0,
                        decimalPlaces: 2,
                        propsForBackgroundLines: false,
                        color: () => COLORS.gray,
                        labelColor: () => COLORS.gray,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: '3',
                            strokeWidth: '2',
                            stroke: COLORS.lightGrey,
                        },
                    }}
                    bezier
                    style={{
                        borderRadius: 16,
                    }}
                />
            </View>

            <View style={{ padding: 20 }}>
                <MonthlyExpensesInfo totalSpending={totalSpending} averageSpending={averageSpending} />
            </View>
        </View>
    )
}

export default MonthlyExpensesChart;