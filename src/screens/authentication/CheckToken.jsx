import { useState } from 'react';
import styles from './signin.style';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import { checkToken } from '../../services/authService';
import { HeightSpacer, ReusableText, ReusableBtn, OTPInput } from '../../components';

const CheckToken = ({ navigation }) => {
    const route = useRoute();
    const [code, setCode] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    const checkVerificationTokenHandler = async () => {
        try {
            const result = await checkToken(route?.params, code);

            if (result.status) {
                navigation.navigate('ChangePassword', { email: route?.params });
            }
        } catch (error) {
            setErrorMessage(error?.response?.data?.message);
        }
    }

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

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ReusableText
                    family={'regular'}
                    size={SIZES.medium}
                    color={COLORS.gray}
                    text={'Code was sent to your email'} />

                <HeightSpacer height={10} />

                <ReusableText
                    family={'regular'}
                    size={SIZES.medium}
                    color={COLORS.black}
                    text={route?.params} />

                <HeightSpacer height={10} />

                <ReusableText
                    family={'regular'}
                    size={SIZES.medium}
                    color={COLORS.gray}
                    text={'This code expires in 5 minutes'} />

                <HeightSpacer height={20} />

                <View>
                    <OTPInput otpLength={4} onOtpChange={(otp) => setCode(otp)} />
                </View>
                <HeightSpacer height={20} />

                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

                <HeightSpacer height={20} />

                <ReusableBtn
                    borderWidth={0}
                    btnText={"Verify code"}
                    onPress={checkVerificationTokenHandler}
                    textColor={COLORS.white}
                    width={SIZES.width - 40}
                    borderColor={COLORS.green}
                    backgroundColor={COLORS.green}
                />
            </View>
        </View>
    )
}

export default CheckToken