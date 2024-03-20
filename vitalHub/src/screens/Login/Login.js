import { Button, ButtonGoogle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinkMedium, TextAccount, TextReenviar } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../components/Title/Style";
import { ContentAccount } from "../../components/ContentAccount/Style";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export const Login = ({ navigation }) => {

    // Show password eye:
    const [password, setPassword] = useState(''); 
    const [showPassword, setShowPassword] = useState(false); 

    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 

    async function Login() {
        navigation.navigate("Main")
    }

    async function LoginDoctor() {
        navigation.navigate("MainDoctor")
    }

    return(
        <Container>
            <Logo
            source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Entrar ou criar conta</Title>

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
            placeholder="Usuário ou E-mail"
            placeholderTextColor="#34898F"
            />
            
            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
            placeholder="Senha"
            placeholderTextColor="#34898F"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            />

            <MaterialCommunityIcons
            style={{ marginLeft: 300, marginBottom: 0, position: 'relative', bottom: 55 }}
            name={showPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#49B3BA"
            onPress={toggleShowPassword} 
            /> 

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