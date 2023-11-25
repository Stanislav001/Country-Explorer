import { useState, useEffect } from 'react';
import { COLORS } from '../../constants/theme';
import { FontAwesome5 } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { useGetHotels } from '../../hooks/useHotel';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import HotelMapCard from '../../components/Tiles/Hotels/HotelMapCard';
import { StyleSheet, View, TouchableOpacity, Modal, StatusBar } from 'react-native';

const Location = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const coordinates = route.params?.coordinates;

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const { data: hotels, isLoading: isLoadingHotels } = useGetHotels();

    const defaultRegion = {
        latitude: 43.71667,
        longitude: 26.83333,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const [region, setRegion] = useState(
        coordinates
            ? coordinates
            : defaultRegion
    );

    useEffect(() => {
        if (coordinates) {
            setRegion(coordinates);
        }
    }, [coordinates]);

    const handleZoomIn = () => {
        setRegion({
            ...region,
            latitudeDelta: region.latitudeDelta / 2,
            longitudeDelta: region.longitudeDelta / 2,
        });
    };

    const handleZoomOut = () => {
        setRegion({
            ...region,
            latitudeDelta: region.latitudeDelta * 2,
            longitudeDelta: region.longitudeDelta * 2,
        });
    };

    const handleMarkerPress = (hotelId) => {
        const selected = hotels.find((hotel) => hotel._id === hotelId);
        setSelectedHotel(selected);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} translucent={false} />
            <MapView region={region} style={styles.map}>
                <Marker coordinate={region} title="My location" />
                {hotels && hotels.map((hotel, index) => {
                    if (hotel.location && hotel.location.coordinates) {
                        const hotelCoordinates = {
                            latitude: hotel.location.coordinates[1],
                            longitude: hotel.location.coordinates[0],
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        };
                        return (
                            <Marker
                                key={index}
                                coordinate={hotelCoordinates}
                                onPress={() => handleMarkerPress(hotel._id)}
                            />
                        );
                    }
                    return null;
                })}
            </MapView>

            <Modal
                style={{ borderWidth: 5, borderColor: 'red' }}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <HotelMapCard
                        item={selectedHotel}
                        margin={10}
                        onClosePress={() => setModalVisible(false)}
                        onPress={() => {
                            setModalVisible(false);
                            navigation.navigate('HotelDetails', selectedHotel?._id);
                        }}
                    />
                </View>
            </Modal>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <FontAwesome5 name="arrow-left" size={20} />
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={handleZoomIn}>
                    <FontAwesome5 name="search-plus" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleZoomOut}>
                    <FontAwesome5 name="search-minus" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },
    backButton: {
        position: 'absolute',
        top: 16,
        left: 16,
        padding: 10,
        backgroundColor: COLORS.white,
        borderRadius: 5,
    },
    buttonContainer: {
        position: 'absolute',
        justifyContent: 'flex-end',
        bottom: 16,
        right: 16,
    },
    iconButton: {
        backgroundColor: COLORS.white,
        padding: 10,
        marginVertical: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        margin: 0,
    },
    closeButton: {
        padding: 10,
        alignItems: 'center',
    },
});

export default Location;
