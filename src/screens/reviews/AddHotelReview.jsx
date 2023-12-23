import * as Yup from 'yup';
import { Formik } from 'formik'
import { useState } from 'react';
import styles from './reviews.style';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../../context/auth-context';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import { View, TextInput, Text, Platform } from 'react-native';
import reviewService from '../../services/reviewService';
import reusable from '../../components/Reusable/reusable';
import { RatingInput } from 'react-native-stock-star-rating';
import { HeightSpacer, ReusableText, ReusableBtn, DescriptionText } from '../../components';

const validationSchema = Yup.object().shape({
    content: Yup.string().min(10, 'Content must be at least 10 characters').required('Required'),
});

const AddHotelReview = ({ navigation }) => {
    const route = useRoute();
    const item = route.params;
    const { currentToken } = useAuth();

    const [errorText, setErrorText] = useState('');
    const [starCount, setStarCount] = useState(item?.rating);

    const clearAlertMessage = () => setErrorText('');

    const onSubmitHandler = async (values) => {
        try {
            const result = await reviewService.addReview(
                item?.title,
                values.content,
                starCount,
                item?._id,
                currentToken
            );

            if (result?.status) {
                navigation.goBack();
            }
        } catch (error) {
            setErrorText(error);
        }
    }

    return (
        <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }} >
            <View style={{ height: 80 }}>
                <AppBar
                    top={50}
                    left={10}
                    right={0}
                    title={'Review'}
                    color={COLORS.white}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={{ marginHorizontal: 20, marginVertical: 10, }}>
                <DescriptionText text={'We’re excited to hear about your stay at our hotel. Your review not only helps us improve, but also assists future guests in making their decision.'} />

                <View style={reusable.rowWithSpace('space-between')}>
                    <ReusableText
                        family={'regular'}
                        size={SIZES.large}
                        color={COLORS.gray}
                        text={'Give Rating'} />
                    <RatingInput
                        size={30}
                        maxStars={6}
                        bordered={false}
                        rating={starCount}
                        setRating={setStarCount} />
                </View>
                <View style={styles.underline}></View>

                <HeightSpacer height={20} />

                <Formik
                    onSubmit={onSubmitHandler}
                    validationSchema={validationSchema}
                    initialValues={{ username: '', email: '', password: '' }} >
                    {({ handleChange, touched, handleSubmit, values, errors, setFieldTouched }) => (
                        <View>
                            <View style={styles.wrapper}>
                                <Text style={styles.label}>Share your experience</Text>
                                <View>
                                    <View style={styles.inputWrapper(touched.content ? COLORS.lightBlue : COLORS.gray)}>
                                        <TextInput
                                            multiline={true}
                                            numberOfLines={Platform.OS === 'ios' ? null : 6}
                                            minHeight={(Platform.OS === 'ios') ? (20 * 6) : null}
                                            autoCorrect={false}
                                            autoCapitalize="none"
                                            value={values.content}
                                            onChangeText={(text) => {
                                                handleChange('content')(text);
                                                clearAlertMessage();
                                            }}
                                            placeholder='Write your review here'
                                            onFocus={() => { setFieldTouched('content') }}
                                            onBlur={() => { setFieldTouched('content', "") }}
                                        />
                                    </View>
                                    {(touched.content || errors.content) && (
                                        <Text style={styles.errorMessage}>{errors.content}</Text>
                                    )}
                                </View>
                            </View>

                            {errorText ? <Text style={styles.errorMessage}>{errorText}</Text> : null}

                            <HeightSpacer height={20} />

                            <ReusableBtn
                                borderWidth={0}
                                btnText={"Save"}
                                onPress={handleSubmit}
                                textColor={COLORS.white}
                                width={SIZES.width - 40}
                                borderColor={COLORS.green}
                                backgroundColor={COLORS.green}
                            />
                        </View>
                    )}
                </Formik>

            </View>
        </View >
    )
}

export default AddHotelReview;