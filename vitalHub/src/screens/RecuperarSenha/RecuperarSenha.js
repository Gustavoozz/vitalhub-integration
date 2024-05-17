import { Image } from "react-native"
import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input, InputError } from "../../components/Input/Style"
import { ArrowIcon, Logo } from "../../components/Logo/Style"
import { TextQuick } from "../../components/Text/Text"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { Feather } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { UserDecodeToken } from "../../utils/Auth"
import api from "../../services/Service"
import { TextAccount } from "../../components/Link/Style"
import Spinner from "../../components/Spinner/Spinner"

export const RecuperarSenha = ({ navigation }) => {
    // CONSTS
    const [email, setEmail] = useState("");
    const [paginaErro, setPaginaErro] = useState(false);

    const [showSpinner, setShowSpinner] = useState(false);



    // FUNCTIONS
    async function SendEmail() {
        setShowSpinner(true);

        await api.post(`/RecuperarSenha?email=${email}`).then(() => {
            setShowSpinner(true);

            setPaginaErro(false);

            navigation.replace("VerificarSenha", { emailRecuperacao: email })
        }).catch(error => {
            console.log(error);

            setPaginaErro(true);
        })

        setShowSpinner(false);
    }



    // EFFECTS



    return (

        <Container>
            <Feather
                style={{ position: 'absolute', left: 20, top: 55 }}
                onPress={() => navigation.replace("Login")}
                name="arrow-left-circle"
                size={30}
                color="#34898F"
            />

            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Recuperar senha</Title>

            <TextQuick>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</TextQuick>

            {
                paginaErro == false ?
                    <Input
                        placeholder="Usuário ou E-mail"
                        value={email}
                        onChangeText={(txt) => setEmail(txt)}
                    />
                    :
                    <>
                        <InputError
                            placeholder="Usuário ou E-mail"
                            value={email}
                            onChangeText={(txt) => setEmail(txt)}
                        />

                        <TextAccount
                            style={{
                                color: "#DB2C15",
                            }}
                        >
                            Email inexistente
                        </TextAccount>
                    </>
            }

            <Button onPress={() => SendEmail()}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <Spinner
                visible={showSpinner}
            />
        </Container >
    )

}