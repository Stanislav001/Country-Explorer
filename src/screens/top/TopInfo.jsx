import { View, Text } from 'react-native';
import { ProfileTile } from '../../components';

const TopInfo = ({ navigation }) => {
  return (
    <View style={{ margin: 20 }}>

      <ProfileTile title={'Personal Information'} icon={'user'} />
      <ProfileTile title={'Payments'} icon={'creditcard'} onPress={() => navigation.navigate('Payments')} />
      <ProfileTile title={'Settings'} icon={'setting'} onPress={() => navigation.navigate('Settings')} />
    </View>
  )
}

export default TopInfo