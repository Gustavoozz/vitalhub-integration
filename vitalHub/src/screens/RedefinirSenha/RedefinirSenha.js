import { Image } from "react-native";
import { Button } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { ArrowIcon, Logo } from "../../components/Logo/Style";
import { TextQuick } from "../../components/Text/Text";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import api from "../../services/Service";

export const RedefinirSenha = ({ navigation, route }) => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    async function ChangePassword() {
        if (password === confirmPassword) {
             await api.put(`/Usuario/AlterarSenha?email=${route.params.emailRecuperacao}`, {
            senhaNova: password
        }).then(() => {
            navigation.replace("Login")
        }).catch(error => {
            console.log(error);
        })
        } else {
            alert("As senhas não estão iguais!")
        }
       
    }

    return (
        <Container>
            <Feather style={{ position: 'absolute', left: 20, top: 30 }} name="x-circle" size={30} color="#34898F" onPress={() => navigation.navigate("Login")} />
            
            <Logo source={require('../../assets/VitalHub_Logo.png')} />

            <Title>Redefinir Senha</Title>

            <TextQuick>Insira e confirme a sua nova senha</TextQuick>

            <Input 
            value={password}
            onChangeText={(txt) => setPassword(txt)}
            placeholder="Nova Senha" />

            <Input 
            value={confirmPassword}
            onChangeText={(txt) => setConfirmPassword(txt)}
            placeholder="Confirmar nova senha" />

            <Button onPress={() => ChangePassword()}>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Button>
        </Container>
    );
}