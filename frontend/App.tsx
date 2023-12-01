import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Home } from '@screens/Home';
import { Loading } from '@components/Loading';
import { RegisterProvider } from '@contexts/RegisterProvider';

import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <RegisterProvider>
        {fontsLoaded ? <Home /> : <Loading />}
      </RegisterProvider>
    </NativeBaseProvider>
  );
}

