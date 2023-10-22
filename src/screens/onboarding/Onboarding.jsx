import { FlatList } from 'react-native';
import { Slides } from '../../components';

const Onboarding = () => {

    const slides = [
        {
            id: 1,
            image: require('../../assets/images/1.png'),
            title: 'Find the perfect place to stay'
        },
        {
            id: 2,
            image: require('../../assets/images/2.png'),
            title: 'Discover the world'
        },
        {
            id: 3,
            image: require('../../assets/images/3.png'),
            title: 'Find the best Hotels in the world'
        },
    ]

    return (
        <FlatList
            horizontal
            pagingEnabled
            data={slides}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Slides item={item} />}
        />
    )
}

export default Onboarding