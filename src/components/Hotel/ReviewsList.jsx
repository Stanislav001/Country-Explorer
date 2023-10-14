import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import ReviewTitle from '../Tiles/Reviews/ReviewTitle'
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

        />
    )
}

export default ReviewsList

const styles = StyleSheet.create({})