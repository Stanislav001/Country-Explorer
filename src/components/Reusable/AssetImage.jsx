import React from 'react';
import { StyleSheet, Image } from 'react-native';

const AssetImage = ({ source, width, height, mode }) => {
    return (
        <Image
            source={source} 
            style={styles.image(width, height, mode)}
        />
    );
}

export default AssetImage;

const styles = StyleSheet.create({
    image: (width, height, mode) => ({
        width: width,
        height: height,
        resizeMode: mode,
    }),
});
