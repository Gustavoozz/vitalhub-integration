import { Button, ButtonGoogle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input, InputError } from "../../components/Input/Style";
import { LinkMedium, TextAccount, TextReenviar } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../components/Title/Style";
import { ContentAccount } from "../../components/ContentAccount/Style";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { useState } from "react";
import { userDecodeToken } from "../../utils/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// API importada
import api from "../../services/Service";



export const Login = ({ navigation }) => {
    // STATES
    const [email, setEmail] = useState(""); // email
    const [senha, setSenha] = useState(""); // senha
    const [mostrarSenha, setMostrarSenha] = useState(false); // seta se a senha é visível
    const [paginaErro, setPaginaErro] = useState(false); // muda a cor do input caso haja erros

    // FUNCTIONS
    const TrocarVisibilidadeSenha = () => {
        setMostrarSenha(!mostrarSenha);
    }; // troca a visibilidade da senha

    async function Login() {
        await api.post('/Login', {
            email: email,
            senha: senha,
        }).then(async response => {
            setPaginaErro(false);

            await AsyncStorage.setItem("token", JSON.stringify(response.data))

            const token = await userDecodeToken()

            if (token.role === "Medico") {
                navigation.replace("MainDoctor")
            } 
            else if (token.role === "Paciente") {
                navigation.replace("Main")
            } else {
                return console.log("Erro");
                
            }
            
        }
        ).catch(error => {
            setPaginaErro(true);

            console.log(error);
        });
    } // loga o usuário



    return (
        <Container>
            <Logo source={require('../../assets/VitalHub_Logo.png')} />

            <Title>Entrar ou criar conta</Title>

            {/* há erro no usuário ou senha? */}
            {paginaErro ?
            // sim: faz com que os inputs fiquem vermelhos e dá um alerta
                <>
                    <InputError
                        placeholder="Usuário ou E-mail"
                        onChangeText={(txt) => setEmail(txt)}
                        value={email}
                        autoCapitalize={"none"}
                    />

                    <InputError
                        placeholder="Senha"
                        secureTextEntry={!mostrarSenha}
                        value={senha}
                        onChangeText={(txt) => setSenha(txt)}
                        autoCapitalize={"none"}
                    />

                    <MaterialCommunityIcons
                        style={{
                            marginLeft: 300,
                            position: 'relative',
                            bottom: 55
                        }}
                        name={mostrarSenha ? 'eye-off' : 'eye'}
                        size={24}
                        color="#DB163D"
                        onPress={TrocarVisibilidadeSenha}
                    />

                    <TextAccount
                        style={{
                            color: "#DB2C15",
                            position: 'relative',
                            top: -20
                        }}
                    >Usuário ou senha incorretos</TextAccount>
                </>
                :
                // não: faz com que o usuário acesse o app normalmente
                <>
                    <Input
                        placeholder="Usuário ou E-mail"
                        onChangeText={(txt) => setEmail(txt)}
                        value={email}
                    />

                    <Input
                        placeholder="Senha"
                        secureTextEntry={!mostrarSenha}
                        value={senha}
                        onChangeText={(txt) => setSenha(txt)}
                    />

                    <MaterialCommunityIcons
                        style={{
                            marginLeft: 300,
                            position: 'relative',
                            bottom: 55
                        }}
                        name={mostrarSenha ? 'eye-off' : 'eye'}
                        size={24}
                        color="#49B3BA"
                        onPress={TrocarVisibilidadeSenha}
                    />
                </>}

            <LinkMedium onPress={() => navigation.replace("RecuperarSenha")}>Esqueceu sua senha?</LinkMedium>

            <Button onPress={(e) => Login()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={20} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <TextReenviar onPress={() => navigation.replace("Cadastro")}>Crie uma conta agora!</TextReenviar></TextAccount>
            </ContentAccount>
        </Container>
    );
}