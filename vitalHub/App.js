//import das fonts
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";

<<<<<<< HEAD
import AppLoading from 'expo-app-loading';
import * as MediaLibrary from "expo-media-library"
import * as ImagePicker from "expo-image-picker"
import { useFonts, MontserratAlternates_700Bold, MontserratAlternates_500Medium, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { Route } from './src/routes/Routes';
import { useEffect } from 'react';
=======
import {
  Quicksand_500Medium,
  Quicksand_400Regular,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";

// import das routes
import { Route } from "./src/routes/Routes";
>>>>>>> develop

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_400Regular,
    Quicksand_600SemiBold,
  });

<<<<<<< HEAD
 
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Route />
    );
=======
  if (!fontsLoaded && !fontsError) {
    return null;
>>>>>>> develop
  }

  return (
    <Route />
  );
}
