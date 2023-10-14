import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, } from './src/screens';

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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}