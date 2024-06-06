import * as Yup from 'yup';
import { Formik } from 'formik'
import { useState } from 'react';
import styles from './signin.style';
import { useAuth } from '../../context/auth-context';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, TextInput, ScrollView } from 'react-native'
import { HeightSpacer, ReusableBtn, WidthSpacer, AssetImage, } from '../../components';
import { resetPassword } from '../../services/authService';

const validationSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    newPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string().required("Required").min(8, 'Password must be at least 8 characters').oneOf([Yup.ref("newPassword"), null], "The passwords do not match"),
});

const ResetPassword = ({ navigation }) => {

    const { setIsLoaded } = useAuth();
    const [errorText, setErrorText] = useState('');

    const clearAlertMessage = () => setErrorText('');

    const onSubmitHandler = async (values) => {
        setIsLoaded(true);
        try {
            const response = await resetPassword(values?.password, values?.newPassword);

            if (response.status === 200) {
                navigation.goBack();
            } else {
                setErrorText(response.data.message);
            }
        } catch (error) {
            setErrorText(error?.message)
        } finally {
            setIsLoaded(false);
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
                <View style={{ height: 100 }}>
                    <AppBar
                        top={50}
                        left={20}
                        right={20}
                        color={COLORS.white}
                        title={'Change Password'}
                        onPress={() => navigation.goBack()}
                    />
                </View>

                <HeightSpacer height={80} />
                <AssetImage mode={'contain'} width={'100%'} height={250} source={require('../../assets/images/bg2.png')} />


                <View style={{ height: 600 }}>

                    <View style={styles.container}>
                        <Formik
                            validationSchema={validationSchema}
                            onSubmit={values => onSubmitHandler(values)}
                            initialValues={{ username: '', email: '', password: '' }}
                        >
                            {({ handleChange, touched, handleSubmit, values, errors, isValid, setFieldTouched }) => (
                                <View>
                                    <View style={styles.wrapper}>
                                        <Text style={styles.label}>Old Password</Text>
                                        <View>
                                            <View style={styles.inputWrapper(touched.password ? COLORS.lightBlue : COLORS.gray)}>
                                                <MaterialCommunityIcons name="lock-outline" color={COLORS.gray} size={20} />

                                                <WidthSpacer width={10} />

                                                <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                                    <TextInput
                                                        autoCorrect={false}
                                                        autoCapitalize="none"
                                                        value={values.password}
                                                        secureTextEntry={true}
                                                        placeholder='Old password'
                                                        onChangeText={(text) => {
                                                            handleChange('password')(text);
                                                            clearAlertMessage();
                                                        }}
                                                        onFocus={() => { setFieldTouched('password') }}
                                                        onBlur={() => { setFieldTouched('password', "") }}
                                                    />
                                                </View>
                                            </View>
                                            {touched.password && errors.password && (
                                                <Text style={styles.errorMessage}>{errors.password}</Text>
                                            )}
                                        </View>
                                    </View>

                                    <View style={styles.wrapper}>
                                        <Text style={styles.label}>New Password</Text>
                                        <View>
                                            <View style={styles.inputWrapper(touched.newPassword ? COLORS.lightBlue : COLORS.gray)}>
                                                <MaterialCommunityIcons name="lock-outline" color={COLORS.gray} size={20} />

                                                <WidthSpacer width={10} />

                                                <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                                    <TextInput
                                                        autoCorrect={false}
                                                        autoCapitalize="none"
                                                        value={values.newPassword}
                                                        placeholder='New password'
                                                        secureTextEntry={true}
                                                        onChangeText={(text) => {
                                                            handleChange('newPassword')(text);
                                                            clearAlertMessage();
                                                        }}
                                                        onFocus={() => { setFieldTouched('newPassword') }}
                                                        onBlur={() => { setFieldTouched('newPassword', "") }}
                                                    />
                                                </View>
                                            </View>
                                            {touched.newPassword && errors.newPassword && (
                                                <Text style={styles.errorMessage}>{errors.newPassword}</Text>
                                            )}
                                        </View>
                                    </View>

                                    <View style={styles.wrapper}>
                                        <Text style={styles.label}>Confirm New Password</Text>
                                        <View>
                                            <View style={styles.inputWrapper(touched.password ? COLORS.lightBlue : COLORS.gray)}>
                                                <MaterialCommunityIcons name="lock-outline" color={COLORS.gray} size={20} />

                                                <WidthSpacer width={10} />

                                                <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                                    <TextInput
                                                        autoCorrect={false}
                                                        secureTextEntry={true}
                                                        autoCapitalize="none"
                                                        value={values.confirmPassword}
                                                        placeholder='Confirm new password'
                                                        onChangeText={(text) => {
                                                            handleChange('confirmPassword')(text);
                                                            clearAlertMessage();
                                                        }}
                                                        onFocus={() => { setFieldTouched('confirmPassword') }}
                                                        onBlur={() => { setFieldTouched('confirmPassword', "") }}
                                                    />
                                                </View>
                                            </View>
                                            {touched.confirmPassword && errors.confirmPassword && (
                                                <Text style={styles.errorMessage}>{errors.confirmPassword}</Text>
                                            )}
                                        </View>
                                    </View>

                                    {errorText ? <Text style={styles.errorMessage}>{errorText}</Text> : null}

                                    <HeightSpacer height={20} />

                                    <ReusableBtn
                                        borderWidth={0}
                                        btnText={"Confirm"}
                                        textColor={COLORS.white}
                                        width={SIZES.width - 40}
                                        borderColor={COLORS.green}
                                        backgroundColor={COLORS.green}
                                        onPress={handleSubmit}
                                    />
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default ResetPassword;