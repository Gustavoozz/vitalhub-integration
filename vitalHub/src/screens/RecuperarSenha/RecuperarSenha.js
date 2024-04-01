import { Image } from "react-native"
import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input, InputError } from "../../components/Input/Style"
import { ArrowIcon, Logo } from "../../components/Logo/Style"
import { TextQuick } from "../../components/Text/Text"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { Feather } from "@expo/vector-icons"

import { useState } from "react"

export const RecuperarSenha = ({ navigation }) => {
    // STATES
    const [email, setEmail] = useState(""); // email
    const [paginaErro, setPaginaErro] = useState(false) // muda a cor do input caso haja erro

    // FUNCTIONS

    return (
        <Container>
            <Feather style={{ position: 'absolute', left: 20, top: 30 }} onPress={() => navigation.replace("Login")} name="arrow-left-circle" size={30} color="#34898F" />

            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Recuperar senha</Title>

            <TextQuick>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</TextQuick>

            {/* há um erro no email? */}
            {paginaErro ?
                // sim: faz com que os inputs fiquem vermelhos e dá um alerta
                <>
                    <InputError
                        placeholder="Usuário ou E-mail"
                        value={email}
                        onChangeText={(txt) => setEmail(txt)}
                    />
                </>
                :
                // não: faz com que o usuário acesse a próxima página normalmente
                <>
                    <Input
                        placeholder="Usuário ou E-mail"
                        value={email}
                        onChangeText={(txt) => setEmail(txt)}
                    />
                </>
            }

            <Button onPress={() => navigation.replace("VerificarSenha")}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Container>
    )
}