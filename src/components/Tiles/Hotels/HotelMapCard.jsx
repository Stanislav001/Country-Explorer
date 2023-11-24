import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS, SIZES, TEXT } from '../../../constants/theme';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NetworkImage, HeightSpacer, ReusableText, Rating, ReusableBtn } from '../../../components/index';

const HotelMapCard = ({ item, margin, onPress, onClosePress }) => {
    return (
        <View style={styles.card(margin)}>
            <View>
                <TouchableOpacity style={styles.closeButton} onPress={onClosePress}>
                    <FontAwesome5 name="times" size={20} color={COLORS.black} />
                </TouchableOpacity>

                <View style={styles.imageContainer}>
                    <NetworkImage source={item.imageUrl} width={'90%'} height={'100%'} borderRadius={16} />
                </View>

                <HeightSpacer height={5} />

                <View style={{ padding: 10, marginHorizontal: 10, alignItems: 'center' }}>
                    <ReusableText
                        family={'medium'}
                        size={SIZES.medium}
                        color={COLORS.black}
                        text={item.title} />

                    <HeightSpacer height={5} />

                    <ReusableText
                        family={'medium'}
                        size={SIZES.medium}
                        color={COLORS.gray}
                        text={`Address: ${item.address.StreetAddress}, ${item?.address?.City}`} />

                    <Rating rating={item?.rating} />

                    <View style={styles.button}>
                        <ReusableBtn
                            borderWidth={0}
                            onPress={onPress}
                            btnText={"See More"}
                            textColor={COLORS.white}
                            width={SIZES.width - 100}
                            borderColor={COLORS.green}
                            backgroundColor={COLORS.green}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HotelMapCard;

const styles = StyleSheet.create({
    card: (margin) => ({
        width: SIZES.width / 1.1,
        height: 350,
        borderRadius: 16,
        backgroundColor: COLORS.lightWhite,
        marginHorizontal: 5
    }),
    imageContainer: {
        height: 150,
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 3
    },
    closeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    button: {
        margin: 10,
        alignItems: 'center',
    },
})