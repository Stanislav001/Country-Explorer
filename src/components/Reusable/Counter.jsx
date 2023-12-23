import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native'
import reusable from './reusable';
import { COLORS, SIZES } from '../../constants/theme';
import ReusableText from './ReusableText';

const Counter = ({ maxCount, count, setCount }) => {
    // const [count, setCount] = useState(1);

    const incrementHandler = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
    }

    const decrementHandler = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <View style={reusable.rowWithSpace('flex-start')}>
            <AntDesign name='minussquareo' size={26} color={COLORS.gray} onPress={decrementHandler} />

            <ReusableText
                family={'regular'}
                size={SIZES.medium}
                text={`  ${count}  `}
                color={COLORS.black} />

            <AntDesign name='plussquareo' size={26} color={COLORS.gray} onPress={incrementHandler} />
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({

})