import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../../context/auth-context';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import { bookHotel } from '../../services/userService';
import { useStripe } from '@stripe/stripe-react-native';
import { Rating } from 'react-native-stock-star-rating';
import reusable from '../../components/Reusable/reusable';
import { createPaymentIntent } from '../../services/paymentService';
import { StyleSheet, View, Alert, TouchableOpacity } from 'react-native';
import { HeightSpacer, Counter, NetworkImage, ReusableBtn, ReusableText, ReusableCalendar, WidthSpacer, AssetImage } from '../../components';

const SelectedRoom = ({ navigation }) => {
    const router = useRoute();
    const { currentToken } = useAuth();
    const { item, location, hotelId } = router.params;
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const [endDate, setEndDate] = useState();
    const [startDate, setStartDate] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);

    const onDateSelection = async (start, end) => {
        setStartDate(new Date(start).toISOString().split('T')[0]);
        setEndDate(new Date(end).toISOString().split('T')[0]);
        setShowCalendar(false);
    }

    const bookHotelHandler = async () => {
        setErrorMessage('');
        try {
            // await onCheckout();
            const result = await bookHotel(hotelId, item?._id, startDate, endDate, currentToken,);

            if (result?.status === 200) {
                navigation.navigate('Successful', { item, location })
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message)
        }
    }

    const onCheckout = async () => {
        const response = await createPaymentIntent({ amount: Math.floor(100 * 100), });

        if (!startDate || !endDate) {
            return setErrorMessage('Please select start and end date.')
        }

        if (response.error) {
            return;
        }
        const { error: paymentSheetError } = await initPaymentSheet({
            merchantDisplayName: 'Example, Inc.',
            paymentIntentClientSecret: response?.paymentIntent,
            defaultBillingDetails: {
                name: 'Jane Doe',
            },
        });

        if (paymentSheetError) {
            //  Alert.alert('Something went wrong', paymentSheetError.message);
            return;
        }

        const { error: paymentError } = await presentPaymentSheet();

        if (paymentError) {
            // Alert.alert(`Error code: ${paymentError.code}`, paymentError.message);
            return;
        } else {
            bookHotelHandler();
        }
    }

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
                                <Rating
                                    maxStarts={6}
                                    bordered={false}
                                    color={'#FD9942'}
                                    stars={item?.rating} />

                                <WidthSpacer width={10} />
                            </View>
                        </View>

                        <HeightSpacer height={10} />

                        <ReusableText
                            family={'medium'}
                            size={SIZES.medium}
                            color={COLORS.gray}
                            text={`${location?.StreetAddress}, ${location?.City}, ${location?.Country}, postal code: ${location?.PostalCode}`} />

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
                                text={'Select date range'} />

                            <TouchableOpacity onPress={() => setShowCalendar(true)}>
                                <FontAwesome name="calendar" size={20} color="black" />
                            </TouchableOpacity>

                        </View>

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
                                text={`$ ${item?.price}`} />
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
                                text={`${item?.SleepsCount} Guest`}
                                family={'regular'}
                                size={SIZES.medium}
                                color={COLORS.black} />
                            <Counter maxCount={item?.SleepsCount} />
                        </View>

                        {errorMessage ? Alert.alert(`${errorMessage}`, 'Please select new dates and try again.') : null}

                        <HeightSpacer height={15} />

                        <ReusableBtn
                            borderWidth={0}
                            btnText={"Book Now"}
                            textColor={COLORS.white}
                            width={SIZES.width - 50}
                            borderColor={COLORS.green}
                            backgroundColor={COLORS.green}
                            onPress={() => onCheckout()}
                        />
                    </View>
                </View>
            </View>

            <ReusableCalendar visible={showCalendar} setVisible={setShowCalendar} onDateSelection={onDateSelection} />
        </View>
    )
}

export default SelectedRoom

const styles = StyleSheet.create({})