import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { TextReenviar } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { TextQuick } from "../../components/Text/Text";
import { ButtonTitle, Title } from "../../components/Title/Style";



// API importada
import api from "../../services/Service";

import Spinner from "../../components/Spinner/Spinner";

// API importada
import api from "../../services/Service";

export const Cadastro = ({ navigation }) => {
<<<<<<< HEAD
    // CONSTS
<<<<<<< HEAD
=======
    const [showSpinner, setShowSpinner] = useState(false);
>>>>>>> develop
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const tipoUsuario = "978C712B-09CF-433C-8153-8DDE8DE41E15";
<<<<<<< HEAD
=======

    // FUNCTIONS
>>>>>>> develop
=======
<<<<<<< HEAD
=======
    const [showSpinner, setShowSpinner] = useState(false);
>>>>>>> origin/develop

<<<<<<< HEAD
    // FUNCTIONS
    // function Timing() {
    //     setShowSpinner(true)
=======
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978
    function Timing() {
        setShowSpinner(true)
>>>>>>> develop

    //     setTimeout(() => {
    //         setShowSpinner(false)
    //     }, 3000)
    // }

    const Cadastrar = async () => {
     
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
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

>>>>>>> develop

    // EFFECTS

=======
>>>>>>> gustavo
<<<<<<< HEAD
>>>>>>> origin/develop
=======
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978
>>>>>>> develop
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
>>>>>>> develop

          
        </Container>
    );
}