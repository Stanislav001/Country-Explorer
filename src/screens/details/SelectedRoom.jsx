import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable';
import { HeightSpacer, Counter, NetworkImage, Rating, ReusableBtn, ReusableText, WidthSpacer, AssetImage } from '../../components';

const SelectedRoom = ({ navigation }) => {
    const router = useRoute();
    const { item } = router.params;

    return (
        <View>
            <View style={{ height: 100 }}>
                <AppBar
                    top={30}
                    left={20}
                    right={20}
                    title={item.title}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
                    <NetworkImage source={item.imageUrl} width={'100%'} height={200} borderRadius={16} />

                    <HeightSpacer height={20} />

                    <View style={{ marginHorizontal: 10 }}>
                        <View style={reusable.rowWithSpace('space-between')}>
                            <ReusableText
                                text={item.title}
                                family={'medium'}
                                size={SIZES.medium}
                                color={COLORS.black} />

                            <View style={reusable.rowWithSpace('flex-start')}>
                                <Rating rating={item.rating} />

                                <WidthSpacer width={10} />

                                <ReusableText
                                    text={`(${item.review})`}
                                    family={'regular'}
                                    size={SIZES.medium}
                                    color={COLORS.gray} />
                            </View>
                        </View>

                        <HeightSpacer height={10} />

                        <ReusableText
                            family={'medium'}
                            size={SIZES.medium}
                            color={COLORS.gray}
                            text={item.location} />

                        <View style={{ borderWidth: 0.5, borderColor: COLORS.lightGrey, marginVertical: 15 }}>
                        </View>

                        <ReusableText
                            family={'regular'}
                            size={SIZES.medium}
                            color={COLORS.black}
                            text={'Room Requirements'} />

                        <HeightSpacer height={10} />

                        <View style={reusable.rowWithSpace('space-between')}>
                            <ReusableText
                                family={'regular'}
                                size={SIZES.medium}
                                color={COLORS.black}
                                text={'Price per night'} />

                            <ReusableText
                                family={'regular'}
                                size={SIZES.medium}
                                color={COLORS.black}
                                text={'$ 400'} />
                        </View>

                        <HeightSpacer height={10} />

                        <View style={reusable.rowWithSpace('space-between')}>
                            <ReusableText
                                family={'regular'}
                                size={SIZES.medium}
                                color={COLORS.black}
                                text={'Payment method'} />

                            <View style={reusable.rowWithSpace('flex-start')}>
                                <AssetImage mode={'contain'} width={30} height={20} source={require('../../assets/images/Visa.png')} />

                                <ReusableText
                                    text={'Stripe'}
                                    family={'regular'}
                                    size={SIZES.medium}
                                    color={COLORS.black} />

                            </View>
                        </View>

                        <HeightSpacer height={10} />

                        <View style={reusable.rowWithSpace('space-between')}>
                            <ReusableText
                                text={'4 Guest'}
                                family={'regular'}
                                size={SIZES.medium}
                                color={COLORS.black} />

                            <Counter />
                        </View>

                        <HeightSpacer height={15} />

                        <ReusableBtn
                            borderWidth={0}
                            btnText={"Book Now"}
                            textColor={COLORS.white}
                            width={SIZES.width - 50}
                            borderColor={COLORS.green}
                            backgroundColor={COLORS.green}
                            onPress={() => navigation.navigate('Successful')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SelectedRoom

const styles = StyleSheet.create({})