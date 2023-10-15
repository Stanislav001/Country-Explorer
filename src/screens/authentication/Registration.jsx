import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './signin.style'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { useState } from 'react';
import { COLORS, SIZES } from '../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeightSpacer, ReusableBtn, WidthSpacer } from '../../components';

const validationSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Username must be at least 3 characters').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    email: Yup.string().email('Provide a valid email').required('Required')
});

const Registration = () => {
    const [loader, setLoader] = useState(false);
    const [obscureText, setObscureText] = useState(false);
    const [responseData, setResponseData] = useState(null);

console.log('tes');

    return (
        <View style={styles.container}>
            <Formik
                onSubmit={(values) => { }}
                validationSchema={validationSchema}
                initialValues={{ username: '', email: '', password: '' }}
            >
                {({ handleChange, touched, handleSubmit, values, errors, isValid, setFieldTouched }) => (
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Username</Text>
                            <View>
                                <View style={styles.inputWrapper(touched.email ? COLORS.lightBlue : COLORS.gray)}>
                                    <MaterialCommunityIcons name="face-man-profile" color={COLORS.gray} size={20} />

                                    <WidthSpacer width={10} />

                                    <TextInput
                                        autoCorrect={false}
                                        value={values.username}
                                        autoCapitalize="none"
                                        styles={{ flex: 1, }}
                                        placeholder='Enter username'
                                        onChangeText={handleChange('username')}
                                        onFocus={() => { setFieldTouched('username') }}
                                        onBlur={() => { setFieldTouched('username', "") }}
                                    />
                                </View>
                                {touched.username && errors.username && (
                                    <Text style={styles.errorMessage}>{errors.username}</Text>
                                )}
                            </View>
                        </View>

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
                                        onChangeText={handleChange('email')}
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

                                    <View style={{ flex: 1,  display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                        <TextInput
                                            autoCorrect={false}
                                            autoCapitalize="none"
                                            value={values.password}
                                            placeholder='Enter password'
                                            secureTextEntry={obscureText}
                                            onChangeText={handleChange('password')}
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

                        <HeightSpacer height={20} />

                        <ReusableBtn
                            borderWidth={0}
                            btnText={"REGISTER"}
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

export default Registration;