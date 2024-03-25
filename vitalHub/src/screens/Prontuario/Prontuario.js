import { Button, ButtonEdit } from "../../components/Button/Style"
import { Container, ContainerUser, ContentProntuario, InformationContent, PhotoContainer } from "../../components/Container/Style"
import { Input, InputProntuario, InputUser } from "../../components/Input/Style"
import { CancelText, TextReenviar } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Style"
import { SubTextQuick } from "../../components/Text/Text"
import { ButtonTitle, LabelProntuario, LabelUser, TitleUser } from "../../components/Title/Style"
import { UserContainer } from "../../components/UserContainer/Style"

export const Prontuario = () => {
    return (
        <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <PhotoContainer>
                <UserContainer source={require('../../assets/User.png')} />
            </PhotoContainer>

            <ContentProntuario>
                <TitleUser>Richard Kosta</TitleUser>
                <SubTextQuick>22 anos    richard.kosta@gmail.com</SubTextQuick>
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

            <CancelText>Cancelar</CancelText>
        </ContainerUser>

    )
}