import { Image } from "react-native"
import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { ArrowIcon, Logo } from "../../components/Logo/Style"
import { TextQuick } from "../../components/Text/Text"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { Feather } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import api from "../../services/Service"
import { userDecodeToken } from "../../utils/Auth"

export const RecuperarSenha = ({ navigation }) => {

    const [email, setEmail] = useState("gustavonascimento928@gmail.com");

    async function profileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(token);
            setProfile(token)
        }
    }

    async function SendEmail() {
        await api.post(`/RecuperarSenha?email=${email}`).then(() => {
            navigation.replace("VerificarSenha", { emailRecuperacao : email })
        }).catch(error => {
            console.log(error);
        })
    }
    
    useEffect(() => {
        profileLoad();
    }, [])

    return (

        <Container>
            <Feather style={{ position: 'absolute', left: 20, top: 30 }} onPress={() => navigation.navigate("Login")} name="arrow-left-circle" size={30} color="#34898F" />

            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Recuperar senha</Title>

            <TextQuick>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</TextQuick>

            <Input
                placeholder="Usuário ou E-mail"
                value={email}
                onChangeText={(txt) => setEmail(txt)}
            />

            <Button onPress={() => SendEmail()}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Container>
    )

}