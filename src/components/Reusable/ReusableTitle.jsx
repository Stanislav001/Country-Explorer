import { View, StyleSheet, TouchableOpacity } from 'react-native'
import reusable from './reusable';
import { COLORS, TEXT } from '../../constants/theme';
import { NetworkImage, WidthSpacer, HeightSpacer, Rating, ReusableText } from '../../components/index';

const ReusableTitle = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reusable.rowWithSpace('flex-start')}>
        <NetworkImage source={item?.imageUrl} width={80} height={80} borderRadius={12} />

        <WidthSpacer width={15} />

        <View>
          <ReusableText
            text={item.title}
            family={'medium'}
            size={TEXT.medium}
            color={COLORS.black} />

          <HeightSpacer height={8} />

          <ReusableText
            size={14}
            family={'medium'}
            color={COLORS.gray}
            text={item.location} />

          <HeightSpacer height={8} />

          <View style={reusable.rowWithSpace('flex-start')}>
            <Rating rating={item.rating} />
            <WidthSpacer width={5} />

            <ReusableText
              size={14}
              family={'medium'}
              color={COLORS.gray}
              text={` (${item.review}) `} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ReusableTitle;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: COLORS.lightWhite,
  }
});