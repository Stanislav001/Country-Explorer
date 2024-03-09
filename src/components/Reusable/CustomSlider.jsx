import reusable from './reusable';
import { View } from 'react-native';
import ReusableText from './ReusableText';
import { SIZES, COLORS } from '../../constants/theme';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const CustomSlider = ({ handleSliderChange, priceRange }) => {
    return (
        <View>
            <View style={[reusable.rowWithSpace('space-between')]}>
                <ReusableText
                    family={'regular'}
                    size={SIZES.medium}
                    color={COLORS.black}
                    text={`${priceRange[0]}$ - ${priceRange[1]}$`} />
            </View>

            <MultiSlider
                snapped
                min={20}
                max={300}
                step={10}
                sliderLength={280}
                values={priceRange}
                allowOverlap={false}
                onValuesChange={handleSliderChange}
                markerStyle={{ backgroundColor: '#387ADF', height: 25, width: 25 }}
                selectedStyle={{ backgroundColor: '#387ADF' }}
            />

        </View>
    );
}

export default CustomSlider