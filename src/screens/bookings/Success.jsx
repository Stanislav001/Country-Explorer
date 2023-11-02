import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import ReusableTitle from '../../components/Reusable/ReusableTitle';
import { AssetImage, ReusableText, ReusableBtn, HeightSpacer } from '../../components';

const Success = ({ navigation }) => {
    const router = useRoute();
    const { item,location } = router.params;
   
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

                    <ReusableTitle item={item} roomAddress={location} />

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