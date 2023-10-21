import { COLORS, SIZES, TEXT } from '../../../constants/theme';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { NetworkImage, HeightSpacer, ReusableText, Rating, } from '../../../components/index';

const HotelCard = ({ item, margin, onPress }) => {
    return (
        <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
            <View>
                <View style={styles.imageContainer}>
                    <NetworkImage source={item.imageUrl} width={'90%'} height={'100%'} borderRadius={16} />
                </View>

                <HeightSpacer height={5} />

                <View style={{ padding: 10 }}>
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
                        text={item?.address?.City} />

                    <HeightSpacer height={5} />

                    <Rating rating={item?.rating} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HotelCard;

const styles = StyleSheet.create({
    card: (margin) => ({
        marginRight: margin,
        width: SIZES.width / 2.2,
        height: 270,
        borderRadius: 16,
        backgroundColor: COLORS.lightWhite
    }),
    imageContainer: {
        height: 150,
        marginTop: 10,
        alignItems: 'center',
    }
})