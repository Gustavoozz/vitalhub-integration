
import AppLoading from 'expo-app-loading';

import { useFonts, MontserratAlternates_700Bold, MontserratAlternates_500Medium, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';

import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { VerificarSenha } from './src/screens/VerificarSenha/VerificarSenha';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';

import { Cadastro } from './src/screens/Cadastro/Cadastro';
import { Perfil } from './src/screens/Perfil/Perfil';
import { MedicoConsultas } from './src/screens/MedicoConsultas/MedicoConsultas';

import { Prontuario } from './src/screens/Prontuario/Prontuario';
import { PacienteConsultas } from './src/screens/PacienteConsultas/PacienteConsultas';
import { ClinicSelect } from './src/screens/ClinicSelect/ClinicSelect';

import { DoctorSelect } from './src/screens/DoctorSelect/DoctorSelect';
import { Localization } from './src/screens/Localization/Localization';
import { DateSelect } from './src/screens/DateSelect/DateSelect';

import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import { ViewPrescription } from './src/screens/ViewPrescription/ViewPrescription';
import { Main } from './src/screens/Main/Main';
import { MainDoctor } from './src/screens/MainDoctor/MainDoctor';


const Stack = createNativeStackNavigator();

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

    // Container = Envolve toda a estrutura de navegação.
    // Navigator = Componente para a navegação.
    // Screen = Tela.
    // >> name: Nome da tela.
    // >> component: Componente que será chamado.
    // >> options ( title ): Título da tela.

    <NavigationContainer>
      <Stack.Navigator> 

        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: "Login"}}
        />  

        <Stack.Screen
          name="Main"
          component={Main}      
        />

      <Stack.Screen
          name="MainDoctor"
          component={MainDoctor}      
        />


        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
          name="Navegacao"
          component={Navegacao}
          options={{title: "Navegação"}}
        /> */}

        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{title: "RecuperarSenha"}}
        />

        <Stack.Screen
          name="VerificarSenha"
          component={VerificarSenha}
          options={{title: "VerificarSenha"}}
        />

        <Stack.Screen
            name="RedefinirSenha"
            component={RedefinirSenha}
            options={{title: "RedefinirSenha"}}
        />

      <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{title: "Cadastro"}}
        />

      <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{title: "Perfil"}}
        />

      <Stack.Screen
            name="MedicoConsultas"
            component={MedicoConsultas}
            options={{title: "MedicoConsultas"}}
        />

      <Stack.Screen
            name="Prontuario"
            component={Prontuario}
            options={{title: "Prontuario"}}
        />

      <Stack.Screen
            name="PacienteConsultas"
            component={PacienteConsultas}
            options={{title: "PacienteConsultas"}}
        />

      <Stack.Screen
            name="ClinicSelect"
            component={ClinicSelect}
            options={{title: "ClinicSelect"}}
        />

      <Stack.Screen
            name="DoctorSelect"
            component={DoctorSelect}
            options={{title: "DoctorSelect"}}
        />

      <Stack.Screen
            name="Localization"
            component={Localization}
            options={{title: "Localization"}}
        />

        <Stack.Screen
            name="DateSelect"
            component={DateSelect}
            options={{title: "DateSelect"}}
        />

        <Stack.Screen
            name="ViewPrescription"
            component={ViewPrescription}
            options={{title: "ViewPrescription"}}
        />

      
      </Stack.Navigator>  
    </NavigationContainer>
  );
}}