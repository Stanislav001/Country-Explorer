import ReusableText from "./ReusableText";
import WidthSpacer from "./WidthSpacer";
import { AntDesign } from '@expo/vector-icons';
import reusable from "./reusable";
import { COLORS, SIZES } from "../../constants/theme";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ProfileTile = ({ onPress, title, icon }) => {
    return (
        <TouchableOpacity style={styles.tile} onPress={onPress}>
            <View style={reusable.rowWithSpace('space-between')}>
                <View style={reusable.rowWithSpace('flex-start')}>
                    <AntDesign name={icon} size={20} />

                    <WidthSpacer width={15} />
                    <ReusableText
                        text={title}
                        family={'regular'}
                        size={SIZES.medium}
                        color={COLORS.gray}
                    />
                </View>
                <AntDesign name={'right'} size={20} onPress={onPress} />
            </View>
        </TouchableOpacity>
    )
}

export default ProfileTile;

const styles = StyleSheet.create({
    tile: {
        marginBottom: 10,
        marginHorizontal: 12,
        padding: 10,
        borderRadius: 15,
        backgroundColor: COLORS.lightWhite,
    }
});