import { Button } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { ContentAccount } from "../../components/ContentAccount/Style";
import { InputVerify, InputVerifyError } from "../../components/Input/Style";
import { LinkMedium, TextAccount, TextReenviar } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { TextQuick } from "../../components/Text/Text";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { Feather } from "@expo/vector-icons";
import { useRef, useState } from "react";
import api from "../../services/Service";
import Spinner from "../../components/Spinner/Spinner";

export const VerificarSenha = ({
    navigation,
    route
}) => {
    // CONSTS
    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [code, setCode] = useState("");
    const [paginaErro, setPaginaErro] = useState(false);

    const [showSpinner, setShowSpinner] = useState(false);



    // FUNCTIONS
    function focusNextInput(index) {
        // Verificar se o index e menor que quantidade de campos:
        if (index < inputs.length - 1) {
            inputs[index + 1].current.focus()
        }
    }

    function focusPrevInput(index) {
        if (index > 0) {
            inputs[index - 1].current.focus()
        }
    }

    const CodeValidate = async () => {
        setShowSpinner(true);

        await api.post(`/RecuperarSenha/ValidarCodigoRecuperacaoSenha?email=${route.params.emailRecuperacao}&codigo=${code}`)
            .then(() => {
                setPaginaErro(false);

                navigation.replace("RedefinirSenha", { emailRecuperacao: route.params.emailRecuperacao });
            }).catch(error => {
                setPaginaErro(true);

                console.log(error);
            })

        setShowSpinner(false);
    }

    async function RecuperarCodigo() {
        await api.post(`/RecuperarSenha?email=${route.params.emailRecuperacao}`)
            .then(() => {
                alert("Código reenviado, consulte o seu e-mail!")
            }).catch(error => {
                console.log(error);
            })
    }



    // EFFECTS



    return (


        <Container>
            <Feather
                style={{ position: 'absolute', left: 20, top: 30 }}
                name="x-circle"
                size={30}
                color="#34898F"
                onPress={() => navigation.replace("Login")}
            />
            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Verifique seu e-mail</Title>

            <TextQuick>Digite o código de 4 dígitos enviado para <TextReenviar>{route.params.emailRecuperacao}</TextReenviar></TextQuick>

            <ContentAccount>
                {
                    paginaErro != true ?
                        [0, 1, 2, 3].map((index) => (
                            <InputVerify
                                key={index}
                                ref={inputs[index]}

                                placeholder="0"
                                maxLength={1}
                                keyboardType="numeric"

                                onChangeText={(txt) => {
                                    if (txt == "") {
                                        focusPrevInput(index)

                                    } else {
                                        const codigoInformado = [...code]
                                        codigoInformado[index] = txt
                                        setCode(codigoInformado.join(''))

                                        focusNextInput(index)
                                    }
                                }}
                            />
                        ))
                        :
                        [0, 1, 2, 3].map((index) => (
                            <InputVerifyError
                                key={index}
                                ref={inputs[index]}

                                placeholder="0"
                                maxLength={1}
                                keyboardType="numeric"

                                onChangeText={(txt) => {
                                    if (txt == "") {
                                        focusPrevInput(index)

                                    } else {
                                        const codigoInformado = [...code]
                                        codigoInformado[index] = txt
                                        setCode(codigoInformado.join(''))

                                        focusNextInput(index)
                                    }
                                }}
                            />
                        ))
                }
            </ContentAccount>

            {
                paginaErro == true ?
                    <TextAccount
                        style={{
                            color: "#DB2C15",
                            position: 'relative',
                        }}
                    >Código de verificação não válido!</TextAccount>
                    :
                    null
            }

            <Button onPress={() => CodeValidate()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <Button
                style={{ backgroundColor: "none" }}
                onPress={() => RecuperarCodigo()}
            >
                <LinkMedium style={{ marginRight: 0 }}>Reenviar Código</LinkMedium>
            </Button>

            <Spinner
                visible={showSpinner}
            />
        </Container>
    );
}