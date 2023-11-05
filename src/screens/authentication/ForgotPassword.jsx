import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import styles from './signin.style';
import { View, TextInput, Text } from 'react-native';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import { sendEmail } from '../../services/authService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeightSpacer, WidthSpacer, ReusableText, ReusableBtn } from '../../components';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Provide a valid email').required('Required')
});

const ForgotPassword = ({ navigation }) => {
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmitHandler = async (values) => {
        try {
            const result = await sendEmail(values?.email);

            if (result?.status) {
                 navigation.navigate('CheckToken', values?.email);
            }
        } catch (error) {
            setErrorMessage(error?.response?.data?.message);
        }
    };

    return (
        <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }} >
            <View style={{ height: 80 }}>
                <AppBar
                    top={40}
                    left={10}
                    right={0}
                    title={'Forgot password'}
                    color={COLORS.white}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()} />
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 30, }}>
                <ReusableText
                    family={'regular'}
                    size={SIZES.large}
                    color={COLORS.black}
                    text={'Enter your email'} />

                <HeightSpacer height={10} />

                <ReusableText
                    family={'regular'}
                    size={SIZES.medium}
                    color={COLORS.gray}
                    text={'Enter the email address to reset your password'} />

                <HeightSpacer height={40} />

                <Formik
                    onSubmit={onSubmitHandler}
                    validationSchema={validationSchema}
                    initialValues={{ email: '' }} >
                    {({ handleChange, touched, handleSubmit, values, errors, setFieldTouched }) => (
                        <View>
                            <View>
                                <View style={styles.inputWrapper(touched.email ? COLORS.lightBlue : COLORS.gray)}>
                                    <MaterialCommunityIcons name="email-outline" color={COLORS.gray} size={20} />

                                    <WidthSpacer width={10} />

                                    <TextInput
                                        autoCorrect={false}
                                        value={values.email}
                                        autoCapitalize="none"
                                        styles={{ flex: 1, }}
                                        placeholder='Enter email'
                                        onChangeText={(text) => {
                                            handleChange('email')(text);
                                            setErrorMessage('');
                                        }}
                                        onFocus={() => { setFieldTouched('email') }}
                                        onBlur={() => { setFieldTouched('email', "") }}
                                    />
                                </View>
                                {touched.email && errors.email && (
                                    <Text style={styles.errorMessage}>{errors.email}</Text>
                                )}
                            </View>

                            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

                            <HeightSpacer height={20} />

                            <ReusableBtn
                                borderWidth={0}
                                btnText={"Confirm"}
                                onPress={handleSubmit}
                                textColor={COLORS.white}
                                width={SIZES.width - 40}
                                borderColor={COLORS.green}
                                backgroundColor={COLORS.green} />
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    )
}

export default ForgotPassword