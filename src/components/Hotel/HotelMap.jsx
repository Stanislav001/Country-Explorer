import { useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

const HotelMap = ({ coordinates }) => {
    const navigation = useNavigation();


    return (
        <TouchableOpacity onPress={() => navigation.navigate('Bottom', { screen: 'Location', params: { coordinates } })}>
            <MapView style={styles.maps} region={coordinates}>
                <Marker coordinate={coordinates} title={coordinates?.title} />
            </MapView>
        </TouchableOpacity >

    )
}

export default HotelMap

const styles = StyleSheet.create({
    maps: {
        marginVertical: 10,
        height: 120,
        width: '100%',
        borderRadius: 12
    }
})