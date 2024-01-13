import reusable from './reusable';
import { Text, View } from 'react-native';
import RangeSlider from 'react-native-range-slider-expo';
import ReusableText from './ReusableText';
import { SIZES, COLORS } from '../../constants/theme';

const CustomSlider = ({ fromValue, setFromValue, toValue, setToValue }) => {
    return (
        <View>
            <RangeSlider
                min={20}
                max={300}
                step={10}
                barHeight={6}
                styleSize='small'
                initialFromValue={11}
                toValueOnChange={value => setToValue(value)}
                fromValueOnChange={value => setFromValue(value)}
            />
            <View style={[reusable.rowWithSpace('space-between'), { marginTop: 10 }]}>
                <ReusableText
                    family={'regular'}
                    size={SIZES.medium}
                    color={COLORS.black}
                    text={`${fromValue}$ - ${toValue}$`} />
            </View>
        </View>
    );
}

export default CustomSlider