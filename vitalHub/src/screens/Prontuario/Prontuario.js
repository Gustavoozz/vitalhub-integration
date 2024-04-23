import { Button, ButtonEdit } from "../../components/Button/Style"
import { ContainerUser, ContentProntuario, PhotoContainer } from "../../components/Container/Style"
import { Input, InputProntuario } from "../../components/Input/Style"
import { CancelText } from "../../components/Link/Style"
import { SubTextQuick } from "../../components/Text/Text"
import {
    ButtonTitle,
    LabelProntuario,
    TitleUser
} from "../../components/Title/Style"
import { UserImage } from "../../components/UserImage/Style"
import { CancelLink } from './Style'

export const Prontuario = ({ navigation }) => {
    return (
        <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <PhotoContainer>
                <UserImage source={require('../../assets/User.png')} />
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

            <CancelLink onPress={() => navigation.replace("Main")}>
                <CancelText>Cancelar</CancelText>
            </CancelLink>
        </ContainerUser>

    )
}