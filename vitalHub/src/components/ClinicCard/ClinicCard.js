import { useState } from "react";
import {
    ContainerCard,
    ContentCard,
    ExtraContainer,
    TextCard,
    TitleCard,
} from "./Style"

export const ClinicCard = ({
    clinica,
    setClinicaId
}) => {
    // CONSTS
    const [selected, setSelected] = useState(false);



    // FUNCTIONS    
    const HandlePress = () => {
        if (selected == false) {
            setSelected(true);

            setClinicaId(clinica.id);
        }
        else {
            setSelected(false);

            setClinicaId(null);
        }
    }



    return (
        <ExtraContainer>
            <ContainerCard
                onPress={() => HandlePress()}
                selected={selected}
            >
                <ContentCard>
                    <TitleCard>{clinica.nomeFantasia}</TitleCard>

                    <TextCard>{clinica.endereco.cidade}, {clinica.endereco.logradouro}</TextCard>
                </ContentCard>
            </ContainerCard>
        </ExtraContainer>
    )
}