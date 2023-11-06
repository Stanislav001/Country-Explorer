import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { QueryClient, QueryClientProvider } from 'react-query';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import AuthTabNavigator from './src/navigation/AuthTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, HotelSearch, Success, SelectedRoom, ChangePassword, Search, HotelReviews, CheckToken, ForgotPassword, AddHotelReview, Payments, ProfileInfo, Settings, SelectRoom, HotelList, HotelDetails, PlaceDetails, CountryDetails, Recommended, Failed } from './src/screens';

import { AuthProvider } from './src/context/auth-context';
import { StripeProvider } from '@stripe/stripe-react-native';
import config from './config';

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

  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, refetchOnMount: true, refetchOnReconnect: true, retry: 1, retryOnMount: true, retryDelay: 6000 } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <StripeProvider publishableKey={config.STRIPE_PUBLIC_KEY}>
        <AuthProvider>
          <NavigationContainer onLayout={onLayoutRootView}>
            <Stack.Navigator>
              <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
              <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{ headerShown: false }} />
              <Stack.Screen name='Auth' component={AuthTabNavigator} options={{ headerShown: false }} />
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
              <Stack.Screen name='ProfileInfo' component={ProfileInfo} options={{ headerShown: false }} />
              <Stack.Screen name='SelectedRoom' component={SelectedRoom} options={{ headerShown: false }} />
              <Stack.Screen name='Successful' component={Success} options={{ headerShown: false }} />
              <Stack.Screen name='Fail' component={Failed} options={{ headerShown: false }} />
              <Stack.Screen name='AddHotelReview' component={AddHotelReview} options={{ headerShown: false }} />
              <Stack.Screen name='HotelReviews' component={HotelReviews} options={{ headerShown: false }} />
              <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
              <Stack.Screen name='CheckToken' component={CheckToken} options={{ headerShown: false }} />
              <Stack.Screen name='ChangePassword' component={ChangePassword} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
      </StripeProvider>
    </QueryClientProvider>
  );
}