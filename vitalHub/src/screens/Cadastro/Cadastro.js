import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input, InputError } from "../../components/Input/Style";
import { TextAccount, TextReenviar } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { TextQuick } from "../../components/Text/Text";
import { ButtonTitle, Title } from "../../components/Title/Style";

import Spinner from "../../components/Spinner/Spinner";

// API importada
import api from "../../services/Service";

export const Cadastro = ({ navigation }) => {
    // CONSTS
    const [email, setEmail] = useState(""); // email
    const [senha, setSenha] = useState(""); // senha
    const [confirmarSenha, setConfirmarSenha] = useState(""); // senha para confirmação
    const [paginaErro, setPaginaErro] = useState(false); // seta os inputs caso a página der erro
    const [textoErro, setTextoErro] = useState(""); // seta o tipo do erro
    const [emailValidate, setEmailValidate] = useState(false); // seta se o email é valido

    const tipoUsuario = "978C712B-09CF-433C-8153-8DDE8DE41E15";

    const [showSpinner, setShowSpinner] = useState(false);



    // FUNCTIONS
    const VerificarEmail = async () => {
        await api.get(`https://verifier.meetchopra.com/verify/${email}?token=92928b756e623357b3bd80e8dc90deae675fb276d83446cfd48711e3b8f51012d0140b9cb2c3441ed819105b13a928bb`)
            .then(response => {
                if (response.data.domain == "gmail.com" ||
                    response.data.domain == "hotmail.com" ||
                    response.data.domain == "outlook.com" ||
                    response.data.domain == "yahoo.com") {
                    setEmailValidate(true);

                    Cadastrar();
                }
                else {
                    setPaginaErro(true);

                    setEmailValidate(false);

                    setTextoErro("Domínio de email não aceito!")
                }
            })
            .catch(error => {
                console.log(error);

                setPaginaErro(true);

                setTextoErro("Digite um endereço de email válido!")
            })
    }

    const Cadastrar = async () => {
        setShowSpinner(true);

        if (email != "") {
            if (emailValidate == true) {
                if (senha == "") {
                    setPaginaErro(true);

                    setTextoErro("Informe uma senha!");
                }
                else if (senha.length < 5) {
                    setPaginaErro(true);

                    setTextoErro("Senha deve ter 5 caracteres no mínimo!");
                }
                else {
                    if (senha === confirmarSenha) {
                        await api.post("/Pacientes", {
                            nome: "",
                            email: email,
                            senha: senha,
                            idTipoUsuario: tipoUsuario
                        }).then(() => {
                            navigation.replace("Login");
                        }).catch(error => {
                            setPaginaErro(true);

                            setTextoErro("Erro, tente novamente")

                            console.log(error);
                        })
                    } else {
                        setPaginaErro(true);

                        setTextoErro("As senhas devem ser iguais!");
                    }
                }
            }
        } else {
            setPaginaErro(true);

            setTextoErro("Informe um email!");
        }

        setShowSpinner(false);
    }


    // EFFECTS



    return (
        <Container>
            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Criar conta</Title>

            <TextQuick>Insira seu endereço de e-mail e senha para realizar seu cadastro.</TextQuick>

            {
                paginaErro == false ?
                    <>
                        <Input
                            placeholder="Usuário ou E-mail"
                            keyboardType="email-address"
                            onChangeText={txt => setEmail(txt)}
                            value={email}
                        />

                        <Input
                            placeholder="Senha"
                            onChangeText={txt => setSenha(txt)}
                            value={senha}
                        />

                        <Input
                            placeholder="Confirmar Senha"
                            onChangeText={txt => setConfirmarSenha(txt)}
                            value={confirmarSenha}
                        />
                    </>
                    :
                    <>
                        <InputError
                            placeholder="Usuário ou E-mail"
                            onChangeText={txt => setEmail(txt)}
                            value={email}
                        />

                        <InputError
                            placeholder="Senha"
                            onChangeText={txt => setSenha(txt)}
                            value={senha}
                        />

                        <InputError
                            placeholder="Confirmar Senha"
                            onChangeText={txt => setConfirmarSenha(txt)}
                            value={confirmarSenha}
                        />

                        <TextAccount
                            style={{
                                color: "#DB2C15"
                            }}
                        >{textoErro}</TextAccount>
                    </>
            }

            <Button onPress={() => VerificarEmail()}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <TextReenviar onPress={() => navigation.replace("Login")}>Cancelar</TextReenviar>

            <Spinner
                visible={showSpinner}
            />
        </Container>
    );
}