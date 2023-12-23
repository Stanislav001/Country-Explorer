import { View } from 'react-native';
import { ProfileTile } from '../../components';

const TopInfo = ({ navigation }) => {
  return (
    <View style={{ margin: 20 }}>
      <ProfileTile title={'Expenses Overview'} icon={'linechart'} onPress={() => navigation.navigate('ProfileInfo')} />
      {/* <ProfileTile title={'Payments'} icon={'creditcard'} onPress={() => navigation.navigate('Payments')} /> */}
      <ProfileTile title={'Settings'} icon={'setting'} onPress={() => navigation.navigate('Settings')} />
    </View>
  )
}

export default TopInfo