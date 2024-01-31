import styles from './home.style';
import { AntDesign } from '@expo/vector-icons';
import Places from '../../components/Home/Places';
import { useAuth } from '../../context/auth-context';
import { TEXT, COLORS } from '../../constants/theme';
import BestHotels from '../../components/Home/BestHotels';
import reusable from '../../components/Reusable/reusable';
import { HeightSpacer, ReusableText } from '../../components';
import Recommendations from '../../components/Home/Recommendations';
import { View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const Home = ({ navigation }) => {
    const { currentUser } = useAuth();

    return (
        <SafeAreaView style={reusable.container}>
            <StatusBar hidden={false} translucent={false} />
            <View>
                <View style={reusable.rowWithSpace('space-between')}>
                    <ReusableText
                        size={TEXT.large}
                        family={'regular'}
                        color={COLORS.black}
                        text={`Hey ${currentUser?.username}`} />

                    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Search')}>
                        <AntDesign name='search1' size={26} />
                    </TouchableOpacity>
                </View>

                <ReusableText
                    text={'Countries'}
                    size={TEXT.large}
                    family={'medium'}
                    color={COLORS.black} />

                <Places />

                <HeightSpacer height={5} />

                <Recommendations />

                <HeightSpacer height={15} />

                <BestHotels />
            </View>
        </SafeAreaView>
    )
}

export default Home    