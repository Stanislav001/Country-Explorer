import { View } from 'react-native'
import styles from './review.style';
import reusable from '../../Reusable/reusable';
import NetworkImage from '../../Reusable/NetworkImage';
import WidthSpacer from '../../Reusable/WidthSpacer';
import ReusableText from '../../Reusable/ReusableText';
import { SIZES, COLORS } from '../../../constants/theme';
import DescriptionText from '../../Reusable/DescriptionText';
import Rating from '../../Reusable/Rating';

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

                    <View style={{ width: '75%' }}>
                        <View style={reusable.rowWithSpace('space-between')}>
                            <ReusableText
                                family={'medium'}
                                size={SIZES.small}
                                color={COLORS.black}
                                text={review.user.username} />


                            <View style={reusable.rowWithSpace('space-between')}>
                                <ReusableText
                                    family={'medium'}
                                    size={SIZES.small}
                                    color={COLORS.black}
                                    text={new Date(review.updatedAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '.')}
                                />
                                <WidthSpacer width={'5%'} />
                                <Rating rating={review.rating} />
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
