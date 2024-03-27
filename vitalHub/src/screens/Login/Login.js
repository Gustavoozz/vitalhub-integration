import { Button, ButtonGoogle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input, InputError } from "../../components/Input/Style";
import { LinkMedium, TextAccount, TextReenviar } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../components/Title/Style";
import { ContentAccount } from "../../components/ContentAccount/Style";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

// API importada
import api from "../../services/Service";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState("medico@medico.com"); // email
    const [senha, setSenha] = useState("medico"); // senha
    const [mostrarSenha, setMostrarSenha] = useState(false); // seta se a senha é visível
    const [paginaErro, setPaginaErro] = useState(false)

    const TrocarVisibilidadeSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    async function Login() {
        await api.post('/Login', {
            email: email,
            senha: senha
        }).then(async response => {
            setPaginaErro(false);

            await AsyncStorage.setItem("token", JSON.stringify(response.data))

            navigation.navigate("Main")
        }
        ).catch(error => {
            setPaginaErro(true);

            console.log(error);
        });
    }

    // async function LoginDoctor() {
    //     navigation.navigate("MainDoctor");
    // };

    return (
        <Container>
            <Logo source={require('../../assets/VitalHub_Logo.png')} />

            <Title>Entrar ou criar conta</Title>

            {paginaErro ?
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

            <Button onPress={(e) => LoginDoctor()}>
                <ButtonTitle>Entrar como Doutor ( Teste )</ButtonTitle>
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