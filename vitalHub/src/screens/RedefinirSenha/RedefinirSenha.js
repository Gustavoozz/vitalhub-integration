
import { Image } from "react-native";
import { Button } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input, InputError } from "../../components/Input/Style";
import { ArrowIcon, Logo } from "../../components/Logo/Style";
import { TextQuick } from "../../components/Text/Text";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import api from "../../services/Service";
import { TextAccount } from "../../components/Link/Style";
import Spinner from "../../components/Spinner/Spinner";

export const RedefinirSenha = ({ navigation, route }) => {
    // CONSTS
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [paginaErro, setPaginaErro] = useState(false);
    const [textoErro, setTextoErro] = useState("");

    const [showSpinner, setShowSpinner] = useState(false);



    // FUNCTIONS
    async function ChangePassword() {
        setShowSpinner(true);

        if (password.length >= 5) {
            if (password === confirmPassword) {
                await api.put(`/Usuario/AlterarSenha?email=${route.params.emailRecuperacao}`, {
                    senhaNova: password
                }).then(() => {
                    setPaginaErro(false);

                    navigation.replace("Login");
                }).catch(error => {
                    console.log(error);
                })
            } else {
                setPaginaErro(true);

                setTextoErro("As senhas devem ser iguais!");
            }
        } else {
            setPaginaErro(true);

            setTextoErro("A senha deve conter pelo menos 5 caracteres!");
        }

        setShowSpinner(false);
    }



    // EFFECTS



    return (
        <Container>
            <Feather style={{ position: 'absolute', left: 20, top: 30 }} name="x-circle" size={30} color="#34898F" onPress={() => navigation.navigate("Login")} />

            <Logo source={require('../../assets/VitalHub_Logo.png')} />

            <Title>Redefinir Senha</Title>

            <TextQuick>Insira e confirme a sua nova senha</TextQuick>

            {
                paginaErro != true ?
                    <>
                        <Input
                            value={password}
                            onChangeText={(txt) => setPassword(txt)}
                            placeholder="Nova Senha"
                        />

                        <Input
                            value={confirmPassword}
                            onChangeText={(txt) => setConfirmPassword(txt)}
                            placeholder="Confirmar nova senha"
                        />
                    </>
                    :
                    <>
                        <InputError
                            value={password}
                            onChangeText={(txt) => setPassword(txt)}
                            placeholder="Nova Senha"
                        />

                        <InputError
                            value={confirmPassword}
                            onChangeText={(txt) => setConfirmPassword(txt)}
                            placeholder="Confirmar nova senha"
                        />

                        <TextAccount
                            style={{
                                color: "#DB2C15",
                                position: 'relative',
                            }}
                        >{textoErro}</TextAccount>
                    </>

            }

            <Button onPress={() => ChangePassword()}>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Button>

            <Spinner
                visible={showSpinner}
            />
        </Container>
    );
}