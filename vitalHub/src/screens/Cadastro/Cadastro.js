import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { TextReenviar } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { TextQuick } from "../../components/Text/Text";
import { ButtonTitle, Title } from "../../components/Title/Style";
import Spinner from "../../components/Spinner/Spinner";

import Spinner from "../../components/Spinner/Spinner";

// API importada
import api from "../../services/Service";

export const Cadastro = ({ navigation }) => {
<<<<<<< HEAD
    // CONSTS
    const [showSpinner, setShowSpinner] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const tipoUsuario = "978C712B-09CF-433C-8153-8DDE8DE41E15";

    // FUNCTIONS
=======
<<<<<<< HEAD
=======
    const [showSpinner, setShowSpinner] = useState(false);

>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978
    function Timing() {
        setShowSpinner(true)

        setTimeout(() => {
            setShowSpinner(false)
        }, 3000)
    }

<<<<<<< HEAD
    const Cadastrar = async () => {
        Timing();

        if ((email != "" && senha != "") && senha === confirmarSenha) {
            await api.post("/Pacientes", {
                nome: "",
                email: email,
                senha: senha,
                idTipoUsuario: tipoUsuario
            }).then(() => {
                navigation.replace("Login");
            }).catch(error => {
                console.log(error);
            })
        } else {
            console.log("Falha no cadastro. Verifique se não há campos vazios e que as senhas sejam iguais!");
        }
    }


    // EFFECTS

=======
>>>>>>> gustavo
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978
    return (
        <Container>
            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Criar conta</Title>

            <TextQuick>Insira seu endereço de e-mail e senha para realizar seu cadastro.</TextQuick>

            <Input
                placeholder="Usuário ou E-mail"
                onChangeText={txt => setEmail(txt)}
            />

            <Input
                placeholder="Senha"
                onChangeText={txt => setSenha(txt)}
            />

            <Input
                placeholder="Confirmar Senha"
                onChangeText={txt => setConfirmarSenha(txt)}
            />

<<<<<<< HEAD
            <Button onPress={() => Cadastrar()}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <TextReenviar onPress={() => navigation.replace("Login")}>Cancelar</TextReenviar>
=======
            <Button onPress={() => Timing()}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <TextReenviar onPress={() => navigation.navigate("Login")}>Cancelar</TextReenviar>
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978

            <Spinner
                visible={showSpinner}
            />
        </Container>
    );
}