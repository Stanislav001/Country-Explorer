import reusable from '../../Reusable/reusable';
import { AntDesign } from '@expo/vector-icons';
import * as Localization from 'expo-localization';
import WidthSpacer from '../../Reusable/WidthSpacer';
import ReusableText from '../../Reusable/ReusableText';
import { COLORS, TEXT } from '../../../constants/theme';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const SettingTile = ({ title, title1, onPress }) => {
    return (
        <TouchableOpacity style={[reusable.rowWithSpace('space-between'), styles.container]}>
            <ReusableText
                text={title}
                size={TEXT.large}
                family={'regular'}
                color={COLORS.dark} />

            {title === 'Language' ? (
                <View style={reusable.rowWithSpace('flex-start')}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/images/USA.png')} />

                    <WidthSpacer width={5} />

                    <ReusableText
                        text={Localization.locale}
                        size={TEXT.large}
                        family={'regular'}
                        color={COLORS.dark} />

                    <WidthSpacer width={5} />

                    <AntDesign name='right' size={20} color={COLORS.dark} />
                </View>
            ) : (
                <View>
                    <View style={reusable.rowWithSpace('flex-start')}>
                        <ReusableText
                            text={title1}
                            size={TEXT.large}
                            family={'regular'}
                            color={COLORS.dark} />

                        <WidthSpacer width={5} />

                        <AntDesign name='right' size={20} color={COLORS.dark} />
                    </View>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default SettingTile

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderColor: COLORS.lightGrey,
    },
    image: {
        width: 40,
        height: 30,
        resizeMode: 'contain',
    },
});