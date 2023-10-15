import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, HotelSearch, Success, SelectedRoom, Search, Payments, Settings, SelectRoom, HotelList, HotelDetails, PlaceDetails, CountryDetails, Recommended, Failed } from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./src/assets/fonts/regular.otf'),
    medium: require('./src/assets/fonts/medium.otf'),
    bold: require('./src/assets/fonts/bold.otf'),
    light: require('./src/assets/fonts/light.otf'),
    xtrabold: require('./src/assets/fonts/xtrabold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
        <Stack.Screen name='CountryDetails' component={CountryDetails} options={{ headerShown: false }} />
        <Stack.Screen name='Recommended' component={Recommended} options={{ headerShown: false }} />
        <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={{ headerShown: false }} />
        <Stack.Screen name='HotelDetails' component={HotelDetails} options={{ headerShown: false }} />
        <Stack.Screen name='HotelList' component={HotelList} options={{ headerShown: false }} />
        <Stack.Screen name='HotelSearch' component={HotelSearch} options={{ headerShown: false }} />
        <Stack.Screen name='SelectRoom' component={SelectRoom} options={{ headerShown: false }} />
        <Stack.Screen name='Payments' component={Payments} options={{ headerShown: false }} />
        <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name='SelectedRoom' component={SelectedRoom} options={{ headerShown: false }} />
        <Stack.Screen name='Successful' component={Success} options={{ headerShown: false }} />
        <Stack.Screen name='Fail' component={Failed} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}