import styles from './home.style';
import { AntDesign } from '@expo/vector-icons';
import { TEXT, COLORS } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import { HeightSpacer, BestHotels, ReusableText, Recommendations, Places } from '../../components';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={reusable.container}>
            <View>
                <View style={reusable.rowWithSpace('space-between')}>
                    <ReusableText
                        size={TEXT.large}
                        text={'Hey Stas'}
                        family={'regular'}
                        color={COLORS.black} />

                    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Search')}>
                        <AntDesign name='search1' size={26} />
                    </TouchableOpacity>
                </View>

                <ReusableText
                    text={'Places'}
                    size={TEXT.large}
                    family={'medium'}
                    color={COLORS.black} />

                <Places />

                <Recommendations />

                <HeightSpacer height={15} />

                <BestHotels />
            </View>
        </SafeAreaView>
    )
}

export default Home    