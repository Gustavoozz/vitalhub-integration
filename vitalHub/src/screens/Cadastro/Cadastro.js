import { Button } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { TextReenviar } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { TextQuick } from "../../components/Text/Text";
import { ButtonTitle, Title } from "../../components/Title/Style";

export const Cadastro = ({ navigation }) => {
    return (
        <Container>
            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Criar conta</Title>

            <TextQuick>Insira seu endereço de e-mail e senha para realizar seu cadastro.</TextQuick>

            <Input
                placeholder="Usuário ou E-mail"
            />

            <Input
                placeholder="Senha"
            />

            <Input
                placeholder="Confirmar Senha"
            />

            <Button>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <TextReenviar onPress={() => navigation.navigate("Login")}>Cancelar</TextReenviar>
        </Container>
    );
}