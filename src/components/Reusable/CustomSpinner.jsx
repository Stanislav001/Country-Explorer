import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const INTERVAL = 300;
const ANIMATION_DURATION = 400;
const ANIMATION_SCALE = 1.4;

const CustomSpinner = ({
    dotCount = 4,
    backgroundOpacity = 0.7,
    dotSize = SIZES.medium,
    dotMargin = 5,
    background = COLORS.lightWhite,
    activeBackground = COLORS.lightBlue,
}) => {
    const [active, setActive] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prevActive) => (prevActive >= dotCount ? 1 : prevActive + 1));
        }, INTERVAL);

        return () => clearInterval(interval);
    }, [dotCount]);

    return (
        <View style={[styles.main, { backgroundColor: background, opacity: backgroundOpacity }]}>
            {[...Array(dotCount)].map((_, i) => (
                <Dot
                    key={i}
                    active={i + 1 === active}
                    size={dotSize}
                    margin={dotMargin}
                    background={background}
                    activeBackground={activeBackground}
                />
            ))}
        </View>
    );
};

const Dot = ({
    active,
    size,
    margin,
    background,
    activeBackground,
}) => {
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (active) scaleUp();
        else scaleDown();
    }, [active]);

    const scaleDown = () => {
        Animated.timing(scale, {
            toValue: 1,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
        }).start();
    };

    const scaleUp = () => {
        Animated.timing(scale, {
            toValue: ANIMATION_SCALE,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
        }).start();
    };

    const style = {
        height: size,
        width: size,
        borderRadius: size / 2,
        marginHorizontal: margin,
        backgroundColor: active ? activeBackground : COLORS.lightBlue,
        transform: [{ scale }],
    };

    return <Animated.View style={[style]} />;
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default CustomSpinner;
