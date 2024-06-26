// imports vitais
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// imports de telas
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import { Login } from "../screens/Login/Login";
import { Main } from "../screens/Main/Main";
import { RecuperarSenha } from "../screens/RecuperarSenha/RecuperarSenha";
import { VerificarSenha } from "../screens/VerificarSenha/VerificarSenha";
import { RedefinirSenha } from "../screens/RedefinirSenha/RedefinirSenha";
import { Cadastro } from "../screens/Cadastro/Cadastro";
import { Perfil } from "../screens/Perfil/Perfil";
import { Home } from "../screens/Home/Home";
import { Prontuario } from "../screens/Prontuario/Prontuario";
import { ClinicSelect } from "../screens/ClinicSelect/ClinicSelect";
import { DoctorSelect } from "../screens/DoctorSelect/DoctorSelect";
import { Localization } from "../screens/Localization/Localization";
import { DateSelect } from "../screens/DateSelect/DateSelect";
import { ViewPrescription } from "../screens/ViewPrescription/ViewPrescription";

//instância do StackNavigator
const Stack = createNativeStackNavigator();

export const Route = () => {
    return (
        // Container = Envolve toda a estrutura de navegação.
        // Navigator = Componente para a navegação.
        // Screen = Tela.
        // >> name: Nome da tela.
        // >> component: Componente que será chamado.
        // >> options ( title ): Título da tela.

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: "fade_from_bottom"
                }}
            >
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    name="Main"
                    component={Main}
                />

                <Stack.Screen
                    name="RecuperarSenha"
                    component={RecuperarSenha}
                    options={{ title: "RecuperarSenha" }}
                />

                <Stack.Screen
                    name="VerificarSenha"
                    component={VerificarSenha}
                    options={{ title: "VerificarSenha" }}
                />

                <Stack.Screen
                    name="RedefinirSenha"
                    component={RedefinirSenha}
                    options={{ title: "RedefinirSenha" }}
                />

                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ title: "Cadastro" }}
                />

                <Stack.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{ title: "Perfil" }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Home" }}
                />

                <Stack.Screen
                    name="Prontuario"
                    component={Prontuario}
                    options={{ title: "Prontuario" }}
                />

                <Stack.Screen
                    name="ClinicSelect"
                    component={ClinicSelect}
                    options={{ title: "ClinicSelect" }}
                />

                <Stack.Screen
                    name="DoctorSelect"
                    component={DoctorSelect}
                    options={{ title: "DoctorSelect" }}
                />

                <Stack.Screen
                    name="Localization"
                    component={Localization}
                    options={{ title: "Localization" }}
                />

                <Stack.Screen
                    name="DateSelect"
                    component={DateSelect}
                    options={{ title: "DateSelect" }}
                />

                <Stack.Screen
                    name="ViewPrescription"
                    component={ViewPrescription}
                    options={{ title: "ViewPrescription" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}