import ReusableText from './ReusableText';
import reusable from '../Reusable/reusable';
import { AntDesign } from '@expo/vector-icons';
import { COLORS, TEXT } from '../../constants/theme';
import { StyleSheet, View, TouchableOpacity } from 'react-native'

const AppBar = ({ color, title, color1, icon, onPress, onPress1, top, left, right, isProfile }) => {
    return (
        <View style={styles.overlay(top, left, right)}>
            <View style={reusable.rowWithSpace('space-between')}>
                {isProfile ? null : <TouchableOpacity style={styles.box(color)} onPress={onPress}>
                    <AntDesign name='left' size={26} />
                </TouchableOpacity>}

                <ReusableText
                    text={title}
                    family={'medium'}
                    size={TEXT.large}
                    color={COLORS.black} />

                <TouchableOpacity style={styles.box1(color1)} onPress={onPress1}>
                    <AntDesign name={icon} size={26} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default AppBar;

const styles = StyleSheet.create({
    overlay: (top, left, right) => ({
        position: 'absolute',
        top: top,
        left: left,
        right: right,
        justifyContent: 'center',
    }),
    box: (color) => ({
        backgroundColor: color,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    }),
    box1: (color) => ({
        backgroundColor: color,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    })
})