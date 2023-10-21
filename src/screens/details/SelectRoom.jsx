import { useRoute } from '@react-navigation/native';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import { useGetHotelRooms } from '../../hooks/useHotel';
import { HeightSpacer, ReusableBtn } from '../../components';
import ReusableTitle from '../../components/Reusable/ReusableTitle';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const SelectRoom = ({ navigation }) => {
    const route = useRoute();
    const id = route.params;
    const { data, isLoading: isLoadingRooms, error: roomsError, } = useGetHotelRooms(id);

    if (isLoadingRooms) {
        return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
    }

    return (
        <View style={{ marginBottom: 100 }}>
            <View style={{ height: 100 }}>
                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    color={COLORS.white}
                    title={'Select Room'}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <FlatList
                data={data?.rooms}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ columnGap: SIZES.medium, marginBottom: 10 }}
                renderItem={({ item }) => (
                    <View style={styles.tileColumn}>
                        <View style={styles.tile}>
                            <ReusableTitle item={item} roomAddress={data?.address} />

                            <HeightSpacer height={10} />

                            <View style={styles.button}>
                                <ReusableBtn
                                    borderWidth={0}
                                    btnText={"Select Room"}
                                    textColor={COLORS.white}
                                    width={SIZES.width - 50}
                                    borderColor={COLORS.green}
                                    backgroundColor={COLORS.green}
                                    onPress={() => navigation.navigate('SelectedRoom', { item, location: data?.address })}
                                />
                            </View>
                        </View>
                    </View>
                )}
            />

            <HeightSpacer height={100} />
        </View>
    )
}

export default SelectRoom;

const styles = StyleSheet.create({
    tileColumn: {
        marginHorizontal: 20,
        marginBottom: 10,
    },
    tile: {
        borderRadius: 12,
        backgroundColor: COLORS.lightWhite,
    },
    button: {
        margin: 10,
        alignItems: 'center',
    },
})