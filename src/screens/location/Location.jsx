import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'

const Location = () => {

    const coordinates = {
        latitude: 43.71667,
        longitude: 26.83333,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        title: 'My location',
        id: 'My location',
    }

    return (
        <MapView initialRegion={coordinates} styles={styles.map}>
            <Marker coordinates={coordinates} title={coordinates.title} />
        </MapView>
    )
}

export default Location;

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    }
});