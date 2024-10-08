import styles from './slides.style';
import { View, Image } from 'react-native'
import { useAuth } from '../../context/auth-context';
import { SIZES, COLORS } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { ReusableText, ReusableBtn, HeightSpacer } from '../../components/index';

const Slides = ({ item }) => {
    const { currentUser } = useAuth();
    const navigation = useNavigation();

    return (
        <View>
            <Image source={item.image} style={styles.image} />

            <View style={styles.stack}>
                <ReusableText text={item.title} family={'medium'} size={SIZES.xxLarge} color={COLORS.white} />

                <HeightSpacer height={40} />

                <ReusableBtn
                    borderWidth={0}
                    btnText={"Get started"}
                    borderColor={COLORS.red}
                    textColor={COLORS.white}
                    backgroundColor={COLORS.red}
                    width={(SIZES.width - 50) / 2.2}
                    onPress={() => currentUser ? navigation.navigate('Bottom') : navigation.navigate('Auth')}
                />
            </View>
        </View>
    )
}

export default Slides