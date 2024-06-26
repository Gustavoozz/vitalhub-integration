import { Button, ButtonGoogle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input, InputError } from "../../components/Input/Style";
import { LinkMedium, TextAccount, TextReenviar } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../components/Title/Style";
import { ContentAccount } from "../../components/ContentAccount/Style";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { useState } from "react";
import { UserDecodeToken } from "../../utils/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// API importada
import api from "../../services/Service";
import Spinner from "../../components/Spinner/Spinner";



export const Login = ({ navigation }) => {
    // STATES
    const [email, setEmail] = useState(""); // email
    const [senha, setSenha] = useState(""); // senha
    const [mostrarSenha, setMostrarSenha] = useState(false); // seta se a senha é visível
    const [paginaErro, setPaginaErro] = useState(false); // muda a cor do input caso haja erros

    const [showSpinner, setShowSpinner] = useState(false);

    // FUNCTIONS
    const TrocarVisibilidadeSenha = () => {
        setMostrarSenha(!mostrarSenha);
    }; // troca a visibilidade da senha

    async function Login() {
        setShowSpinner(true);

        await api.post('/Login', {
            email: email,
            senha: senha,
        }).then(async response => {
            setPaginaErro(false);

            await AsyncStorage.setItem("token", JSON.stringify(response.data));

            navigation.replace("Main");
        }
        ).catch(error => {
            setPaginaErro(true);

            console.log(error);
        });

        setShowSpinner(false);
    }



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
                    />

                    <InputError
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

            <ContentAccount>
                <TextAccount>Não tem conta? <TextReenviar onPress={() => navigation.replace("Cadastro")}>Crie uma conta agora!</TextReenviar></TextAccount>
            </ContentAccount>

            <Spinner
                visible={showSpinner}
            />
        </Container>
    );
}