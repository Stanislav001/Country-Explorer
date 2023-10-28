import { StyleSheet, View } from 'react-native';
import * as Localization from 'expo-localization';
import { COLORS, SIZES } from '../../constants/theme';
import AppBar from '../../components/Reusable/AppBar';
import { HeightSpacer, ReusableText, SettingTile } from '../../components';

const Settings = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }} >
            <View style={{ height: 80 }}>
                <AppBar
                    top={30}
                    left={20}
                    right={20}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()} />
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <ReusableText
                    family={'regular'}
                    size={SIZES.xLarge}
                    color={COLORS.black}
                    text={'Account Settings'} />

                <HeightSpacer height={10} />

                <SettingTile title={'Language'} />

                <HeightSpacer height={3} />

                <SettingTile title={'Country'} title1={Localization.region} />

                <HeightSpacer height={3} />

                <SettingTile title={'Currency'} title1={Localization.currency} />

                <HeightSpacer height={40} />

                <ReusableText
                    text={'Support'}
                    family={'regular'}
                    color={COLORS.black}
                    size={SIZES.xLarge} />

                <HeightSpacer height={10} />

                <SettingTile title={'Get Help'} title1={''} />

                <HeightSpacer height={3} />

                <SettingTile title={'Give a feedback'} title1={''} />

                <HeightSpacer height={40} />

                <ReusableText
                    text={'Legal'}
                    family={'regular'}
                    color={COLORS.black}
                    size={SIZES.xLarge} />

                <HeightSpacer height={10} />

                <SettingTile title={'Terms of Service'} title1={''} />

                <HeightSpacer height={3} />

                <SettingTile title={'Privacy Policy'} title1={''} />
            </View>
        </View >
    )
}

export default Settings

const styles = StyleSheet.create({})