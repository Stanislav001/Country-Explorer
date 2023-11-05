import { useState, useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const OTPInput = ({ otpLength, onOtpChange }) => {
    const [otp, setOtp] = useState(Array(otpLength).fill(''));
    const inputs = useRef([]);

    const handleOTPChange = (index, value) => {
        if (value.length <= 1) {
            otp[index] = value;
            setOtp([...otp]);
            if (value && index !== otpLength - 1) {
                inputs.current[index + 1].focus();
            }
            onOtpChange(otp.join(''));
        }
    };

    return (
        <View style={styles.container}>
            {Array(otpLength)
                .fill('')
                .map((_, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(value) => handleOTPChange(index, value)}
                        value={otp[index]}
                        ref={(input) => (inputs.current[index] = input)}
                    />
                ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    otpInput: {
        width: 40,
        height: 40,
        borderBottomWidth: 1,
        margin: 5,
        textAlign: 'center',
    },
});

export default OTPInput;
