import { StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import ReusableTitle from '../../components/Reusable/ReusableTitle';
import { AssetImage, ReusableText, ReusableBtn, HeightSpacer } from '../../components'

const Success = ({ navigation }) => {
    const hotel = {
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Seaside Resort",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
        "rating": 4.9,
        "review": "1204 Reviews",
        "location": "Miami Beach, FL"
    }

    return (
        <View>
            <View style={{ marginTop: '20%' }}>
                <AssetImage source={require('../../assets/images/checked.png')} width={'100%'} height={200} mode={'contain'} />

                <HeightSpacer height={40} />

                <View style={{ alignItems: 'center' }}>
                    <ReusableText
                        family={'medium'}
                        size={TEXT.xLarge}
                        color={COLORS.black}
                        text={'Booking Successful'} />

                    <HeightSpacer height={20} />

                    <ReusableText
                        family={'regular'}
                        size={SIZES.medium}
                        color={COLORS.gray}
                        text={'You can find your booking details below'} />

                    <HeightSpacer height={20} />
                </View>

                <View style={{ margin: 20 }}>
                    <ReusableText
                        family={'bold'}
                        size={SIZES.medium}
                        color={COLORS.dark}
                        text={'Room Details'} />

                    <HeightSpacer height={20} />

                    <ReusableTitle item={hotel} />

                    <HeightSpacer height={40} />

                    <ReusableBtn
                        borderWidth={0}
                        btnText={"Done"}
                        textColor={COLORS.white}
                        width={SIZES.width - 50}
                        borderColor={COLORS.green}
                        backgroundColor={COLORS.green}
                        onPress={() => navigation.navigate('Bottom')}
                    />
                </View>
            </View>
        </View>
    )
}

export default Success

const styles = StyleSheet.create({

})