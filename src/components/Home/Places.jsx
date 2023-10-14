import Country from '../Tiles/Country/Country';
import { HeightSpacer } from '../../components/index';
import { COLORS, SIZES } from '../../constants/theme';
import { VirtualizedList, View, ActivityIndicator } from 'react-native';

const Places = () => {
    const countries = [
        {
            "_id": "64c62bfc65af9f8c969a8d04",
            "country": "USA",
            "description": "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/1bcdbbd0-d702-475d-92ea-d9171c041674-vinci_01_places_new_york.jpg",
            "popular": [
                {
                    "_id": "64c631650298a05640539adc",
                    "title": "Walt Disney World",
                    "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
                    "rating": 4.7,
                    "review": "1204 Reviews",
                    "location": "Orlando, USA",
                    "region": "North America, USA"
                },
                {
                    "_id": "64d062a3de20d7c932f1f70a",
                    "title": "Statue of Liberty",
                    "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
                    "rating": 4.8,
                    "review": "1452 Reviews",
                    "location": "Liberty Island, New York Harbor",
                    "region": "North America, USA"
                }
            ]
        },
        {
            "_id": "64c62bfc65af9f8c969a8d05",
            "country": "France",
            "description": "France is known for its rich history, exquisite cuisine, and romantic ambiance. From the iconic Eiffel Tower in Paris to the picturesque landscapes of Provence, France offers a unique and memorable experience for travelers.",
            "imageUrl": "https://example.com/france-image.jpg",
            "popular": [
                {
                    "_id": "64c631650298a05640539add",
                    "title": "Eiffel Tower",
                    "imageUrl": "https://example.com/eiffel-tower-image.jpg",
                    "rating": 4.9,
                    "review": "1890 Reviews",
                    "location": "Paris, France",
                    "region": "Europe, France"
                },
                {
                    "_id": "64d062a3de20d7c932f1f70b",
                    "title": "Louvre Museum",
                    "imageUrl": "https://example.com/louvre-museum-image.jpg",
                    "rating": 4.7,
                    "review": "1567 Reviews",
                    "location": "Paris, France",
                    "region": "Europe, France"
                }
            ]
        }
    ];

    if (isLoading) {
        return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
    }

    return (
        <View>
            <HeightSpacer height={5} />

            <VirtualizedList
                data={countries}
                horizontal
                keyExtractor={(item) => item._id}
                getItemCount={(data) => data.length}
                showsHorizontalScrollIndicator={false}
                getItem={(data, index) => data[index]}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: SIZES.medium }}>
                        <Country item={item} />
                    </View>
                )}
            />
        </View>
    )
}

export default Places;