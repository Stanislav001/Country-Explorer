import { StyleSheet, Image } from 'react-native'
import React from 'react'

const NetworkImage = ({ source, width, height, borderRadius }) => {
    return (
        <Image
            source={{ uri: source }}
            style={styles.image(width, height, borderRadius)}
        />
    )
}

export default NetworkImage;

const styles = StyleSheet.create({
    image: (width, height, borderRadius) => ({
        width: width,
        height: height,
        resizeMode: 'cover',
        borderRadius: borderRadius,
    }),
});