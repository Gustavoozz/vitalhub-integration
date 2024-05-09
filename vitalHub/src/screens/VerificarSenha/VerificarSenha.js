import { Button } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { ContentAccount } from "../../components/ContentAccount/Style";
import { InputVerify } from "../../components/Input/Style";
import { TextReenviar } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { TextQuick } from "../../components/Text/Text";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { Feather } from "@expo/vector-icons";
<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
import api from "../../services/Service";
import userDecodeToken from "../../utils/Auth"

export const VerificarSenha = ({ navigation, route }) => {
    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)]
    const [code, setCode] = useState("");

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

    async function profileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(token);
            setProfile(token)
        }
    }

    async function codeValidate() {
        console.log(code);
        await api.post(`/RecuperarSenha/PostValidacao?email=${route.params.emailRecuperacao}&codigo=${code}`)
        .then(() => {
            navigation.replace("RedefinirSenha", {emailRecuperacao : route.params.emailRecuperacao})
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        profileLoad();
    }, [])
    
=======
import { useRef, useState } from "react";
import api from "../../services/Service";

export const VerificarSenha = ({
    navigation,
    route
}) => {
    // CONSTS
    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)]
    const [code, setCode] = useState("");



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
        await api.post(`/RecuperarSenha/ValidarCodigoRecuperacaoSenha?email=${route.params.emailRecuperacao}&codigo=${code}`)
            .then(() => {
                navigation.replace("RedefinirSenha", { emailRecuperacao: route.params.emailRecuperacao })
            }).catch(error => {
                console.log(error);
            })
    }



    // EFFECTS



>>>>>>> develop
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
<<<<<<< HEAD
                {/* <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold', color: '#34898F' }}
                    placeholder="0"
                    maxLength={1}
                    keyboardType="numeric"
                /> */}
                {
                    [0, 1, 2, 3].map((index) => (
                    <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold', color: '#34898F' }}
                        key={index}
                        ref={ inputs[index] }

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


            <Button onPress={() => codeValidate()}>
=======
                {
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
                }
            </ContentAccount>

            <Button onPress={() => CodeValidate()}>
>>>>>>> develop
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <TextReenviar>Reenviar Código</TextReenviar>
        </Container>
    );
}