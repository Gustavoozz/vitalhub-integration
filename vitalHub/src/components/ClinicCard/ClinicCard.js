import {ContainerCard, ContentCard, ExtraContainer, TextCard, TitleCard, } from "./Style"

export const ClinicCard = ({
    onPress,
    clinic,
}) => {
    return (
        <ExtraContainer>
            <ContainerCard onPress={onPress}>
                <ContentCard>
                    <TitleCard>{clinic.nomeFantasia}</TitleCard>

                    <TextCard>{clinic.endereco.cidade}, {clinic.endereco.logradouro}</TextCard>
                </ContentCard>
            </ContainerCard>
        </ExtraContainer>
    )
}