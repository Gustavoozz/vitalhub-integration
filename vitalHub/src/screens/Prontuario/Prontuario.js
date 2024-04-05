import { useEffect, useState } from "react"
import { Button, ButtonBack, ButtonEdit } from "../../components/Button/Style"
import { Container, ContainerUser, ContentProntuario, InformationContent, PhotoContainer } from "../../components/Container/Style"
import { Input, InputProntuario, InputUser } from "../../components/Input/Style"
import { CancelText, TextReenviar } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Style"
import { SubTextQuick } from "../../components/Text/Text"
import { ButtonTitle, LabelProntuario, LabelUser, TitleUser } from "../../components/Title/Style"
import { UserContainer } from "../../components/UserContainer/Style"
import { userDecodeToken } from "../../utils/Auth"

export const Prontuario = ({ navigation }) => {
    const [nome, setNome] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();

    async function profileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(token);
        }

        setNome(token.name);
        setAge(token.dataNascimento);
        setEmail(token.email);

    }

    useEffect(() => {
        profileLoad();
    })
    return (
        <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <PhotoContainer>
                <UserContainer source={require('../../assets/User.png')} />
            </PhotoContainer>

            <ContentProntuario>
                <TitleUser>{nome}</TitleUser>
                <SubTextQuick>{age}    {email}</SubTextQuick>
            </ContentProntuario>

            <LabelProntuario>Descrição da Consulta</LabelProntuario>
            <InputProntuario style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                placeholder="Descrição..."
            />

            <LabelProntuario>Diagnóstico do paciente</LabelProntuario>
            <Input style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                placeholder="Diagnóstico..."
            />

            <LabelProntuario>Prescrição médica</LabelProntuario>
            <InputProntuario style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                placeholder="Prescrição medica..."
            />

            <Button>
                <ButtonTitle>Salvar</ButtonTitle>
            </Button>

            <ButtonEdit>
                <ButtonTitle>Editar</ButtonTitle>
            </ButtonEdit>

            <ButtonBack onPress={() => navigation.replace("MainDoctor")}>
                <CancelText>Cancelar</CancelText>
            </ButtonBack>
            
        </ContainerUser>

    )
}