import ReusableText from '../Reusable/ReusableText';
import { SIZES, COLORS } from '../../constants/theme';
import ReviewTitle from '../Tiles/Reviews/ReviewTitle';
import { StyleSheet, FlatList, View } from 'react-native';

const ReviewsList = ({ reviews }) => {
    return (
        <FlatList
            data={reviews}
            scrollEnabled={false}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={{ marginBottom: 10 }}>
                    <ReviewTitle review={item} />
                </View>
            )}
            ListFooterComponent={
                reviews?.length === 0 ? (
                    <View style={{ marginBottom: 10 }}>
                        <ReusableText
                            family={'regular'}
                            size={SIZES.medium}
                            color={COLORS.black}
                            text={"There are no reviews for this hotel"} />
                    </View>
                ) : null
            }
        />
    )
}

export default ReviewsList

const styles = StyleSheet.create({})