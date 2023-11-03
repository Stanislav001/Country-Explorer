import React from 'react';
import { View } from 'react-native';
import ReusableText from '../Reusable/ReusableText';
import { SIZES, COLORS } from '../../constants/theme';
import ReviewTitle from '../Tiles/Reviews/ReviewTitle';

const ReviewsList = ({ reviews }) => {
    return (
        <View>
            {reviews.length > 0 ? (
                reviews.map((item, index) => (
                    <View key={item._id} style={{ marginBottom: 10 }}>
                        <ReviewTitle review={item} />
                    </View>
                ))
            ) : (
                <View style={{ marginBottom: 10 }}>
                    <ReusableText
                        family={'regular'}
                        size={SIZES.medium}
                        color={COLORS.black}
                        text={"There are no reviews for this hotel"}
                    />
                </View>
            )}
        </View>
    );
};

export default ReviewsList;
