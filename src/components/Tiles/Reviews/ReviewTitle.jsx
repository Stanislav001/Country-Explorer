import { View } from 'react-native'
import styles from './review.style';
import reusable from '../../Reusable/reusable';
import NetworkImage from '../../Reusable/NetworkImage';
import WidthSpacer from '../../Reusable/WidthSpacer';
import ReusableText from '../../Reusable/ReusableText';
import { SIZES, COLORS } from '../../../constants/theme';
import Rating from '../../Reusable/Rating';
import DescriptionText from '../../Reusable/DescriptionText';

const ReviewTitle = ({ review }) => {
    return (
        <View style={styles.reviewBorder}>
            <View style={reusable.rowWithSpace('space-between')}>
                <View style={reusable.rowWithSpace('flex-start')}>
                    <NetworkImage
                        width={54}
                        height={54}
                        borderRadius={10}
                        source={review.user.profile} />

                    <WidthSpacer width={20} />

                    <View style={{ width: '70%' }}>
                        <View style={reusable.rowWithSpace('space-between')}>
                            <ReusableText
                                family={'medium'}
                                size={SIZES.small}
                                color={COLORS.black}
                                text={review.user.username} />

                            <WidthSpacer width={'20%'} />

                            <View style={reusable.rowWithSpace('space-between')}>
                                <Rating rating={review.rating} />

                                <WidthSpacer width={5} />

                                <ReusableText
                                    family={'medium'}
                                    size={SIZES.small}
                                    color={COLORS.black}
                                    text={review.updatedAt} />
                            </View>
                        </View>

                        <DescriptionText text={review.review} lines={3} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ReviewTitle
