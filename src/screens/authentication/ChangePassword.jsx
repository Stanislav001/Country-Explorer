import * as Yup from 'yup';
import { Formik } from 'formik'
import { useState } from 'react';
import styles from './signin.style';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../../context/auth-context';
import { COLORS, SIZES } from '../../constants/theme';
import { changePassword } from '../../services/authService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { HeightSpacer, ReusableBtn, WidthSpacer, AssetImage } from '../../components';

const validationSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string().required("Required").min(8, 'Password must be at least 8 characters').oneOf([Yup.ref("password"), null], "The passwords do not match"),
});

const ChangePassword = ({ navigation }) => {
    const route = useRoute();
    const { email } = route.params;

    const { setIsLoaded } = useAuth();
    const [errorText, setErrorText] = useState('');
    const [obscureText, setObscureText] = useState(true);

    const clearAlertMessage = () => setErrorText('');

    const onSubmitHandler = async (values) => {
        setIsLoaded(true);
        try {
            let result = await changePassword(email, values?.password);

            if (result?.status) {
                navigation.navigate('Auth');
            }
        } catch (error) {
            setErrorText(error?.response?.data?.message)
        } finally {
            setIsLoaded(false);
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
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
                                        <Text style={styles.label}>New Password</Text>
                                        <View>
                                            <View style={styles.inputWrapper(touched.password ? COLORS.lightBlue : COLORS.gray)}>
                                                <MaterialCommunityIcons name="lock-outline" color={COLORS.gray} size={20} />

                                                <WidthSpacer width={10} />

                                                <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                                    <TextInput
                                                        autoCorrect={false}
                                                        autoCapitalize="none"
                                                        value={values.password}
                                                        placeholder='New password'
                                                        secureTextEntry={obscureText}
                                                        onChangeText={(text) => {
                                                            handleChange('password')(text);
                                                            clearAlertMessage();
                                                        }}
                                                        onFocus={() => { setFieldTouched('password') }}
                                                        onBlur={() => { setFieldTouched('password', "") }}
                                                    />

                                                    <TouchableOpacity onPress={() => setObscureText(!obscureText)}>
                                                        <MaterialCommunityIcons size={18} name={obscureText ? "eye-outline" : "eye-off-outline"} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            {touched.password && errors.password && (
                                                <Text style={styles.errorMessage}>{errors.password}</Text>
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
                                                        autoCapitalize="none"
                                                        value={values.confirmPassword}
                                                        placeholder='Confirm new password'
                                                        secureTextEntry={obscureText}
                                                        onChangeText={(text) => {
                                                            handleChange('confirmPassword')(text);
                                                            clearAlertMessage();
                                                        }}
                                                        onFocus={() => { setFieldTouched('confirmPassword') }}
                                                        onBlur={() => { setFieldTouched('confirmPassword', "") }}
                                                    />

                                                    <TouchableOpacity onPress={() => setObscureText(!obscureText)}>
                                                        <MaterialCommunityIcons size={18} name={obscureText ? "eye-outline" : "eye-off-outline"} />
                                                    </TouchableOpacity>
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

export default ChangePassword;