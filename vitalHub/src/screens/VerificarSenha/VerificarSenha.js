import { Image } from "react-native";
import { Button } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { ContentAccount } from "../../components/ContentAccount/Style";
import { InputVerify } from "../../components/Input/Style";
import { LinkMedium, TextReenviar } from "../../components/Link/Style";
import { ArrowIcon, Logo } from "../../components/Logo/Style";
import { TextQuick } from "../../components/Text/Text";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { Feather } from "@expo/vector-icons";

export const VerificarSenha = ({ navigation }) => {
    return (

        <Container>
            <Feather style={{ position: 'absolute', left: 20, top: 30 }} name="x-circle" size={30} color="#34898F" onPress={() => navigation.navigate("Login")} />
            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Verifique seu e-mail</Title>

            <TextQuick>Digite o código de 4 dígitos enviado para <TextReenviar> username@email.com</TextReenviar></TextQuick>

            <ContentAccount>
                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold', color: '#34898F' }}
                    placeholder="0"
                    maxLength={1}
                />

                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold', color: '#34898F' }}
                    placeholder="0"
                    maxLength={1}
                />

                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold', color: '#34898F' }}
                    placeholder="0"
                    maxLength={1}
                />

                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold', color: '#34898F' }}
                    placeholder="0"
                    maxLength={1}
                />
            </ContentAccount>


            <Button>
                <ButtonTitle onPress={() => navigation.replace("RedefinirSenha")}>Entrar</ButtonTitle>
            </Button>

            <TextReenviar>Reenviar Código</TextReenviar>
        </Container>
    );
}