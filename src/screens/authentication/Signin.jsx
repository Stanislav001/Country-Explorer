import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import styles from './signin.style';
import { useAuth } from '../../context/auth-context';
import { COLORS, SIZES } from '../../constants/theme';
import { loginUser } from '../../services/authService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { HeightSpacer, ReusableBtn, WidthSpacer } from '../../components';

const validationSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    email: Yup.string().email('Provide a valid email').required('Required')
});

const Signin = ({ navigation }) => {
    const [errorText, setErrorText] = useState('');
    const [obscureText, setObscureText] = useState(true);
    const { changeCurrentUser, setIsLoaded } = useAuth();

    const clearAlertMessage = () => setErrorText('');

    async function onSubmitHandler(values) {
        setIsLoaded(true);

        try {
            let result = await loginUser(values);

            if (result?.status === 200) {
                await changeCurrentUser(result?.data?.token);

                navigation.navigate('Bottom');
            }
        } catch (error) {
            setErrorText(error?.message)
        } finally {
            setIsLoaded(false);
        }
    }


    return (
        <View style={styles.container}>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => onSubmitHandler(values)}
            >
                {({ handleChange, touched, handleSubmit, values, errors, isValid, setFieldTouched }) => (
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Email</Text>
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
                                            clearAlertMessage();
                                        }}
                                        onFocus={() => { setFieldTouched('email') }}
                                        onBlur={() => { setFieldTouched('email', "") }}
                                    />
                                </View>
                                {touched.email && errors.email && (
                                    <Text style={styles.errorMessage}>{errors.email}</Text>
                                )}
                            </View>
                        </View>

                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Password</Text>
                            <View>
                                <View style={styles.inputWrapper(touched.password ? COLORS.lightBlue : COLORS.gray)}>
                                    <MaterialCommunityIcons name="lock-outline" color={COLORS.gray} size={20} />

                                    <WidthSpacer width={10} />

                                    <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                        <TextInput
                                            autoCorrect={false}
                                            autoCapitalize="none"
                                            value={values.password}
                                            placeholder='Enter password'
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

                        {errorText ? <>
                            <HeightSpacer height={20} />
                            <Text style={styles.errorMessage}>{errorText}</Text>
                        </> : null}

                        <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                                <Text>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>

                        <HeightSpacer height={20} />

                        <ReusableBtn
                            borderWidth={0}
                            btnText={"SIGN IN"}
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
    )
}

export default Signin