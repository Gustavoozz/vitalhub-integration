
import AppLoading from 'expo-app-loading';
import * as MediaLibrary from "expo-media-library"
import * as ImagePicker from "expo-image-picker"
import { useFonts, MontserratAlternates_700Bold, MontserratAlternates_500Medium, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { Route } from './src/routes/Routes';
import { useEffect } from 'react';

export default function App() {

  let [fontsLoaded] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular
  });

 
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Route />
    );
  }
}