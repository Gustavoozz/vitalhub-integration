<<<<<<< HEAD
import { useState } from 'react';
import { ClinicCards, LocationClinic, Rating,
    NameClinic, TimeText, TimeView,
    ViewColumn, ViewRow  } from './Style'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesome } from '@expo/vector-icons';


const ClinicCard = ({ clinica, setClinica }) => {
const [selected, setSelected ] = useState(true)


const handleCard = () => {
  setSelected(true);

}

return (
<ClinicCards
 onPress={() => handleCard() && setClinica({clinicaId: clinica.Id, clinicaLabel: clinica.nomeFantasia})} 
 selected={selected}
 >
<ViewColumn>
  <NameClinic>{clinica.nomeFantasia}</NameClinic>

  <LocationClinic>{clinica.endereco.logradouro}</LocationClinic>
</ViewColumn>

<ViewColumn alignItems='flex-end'>

  <TimeView>
  <FontAwesome name="calendar" size={16} color="#49B3BA" />
  

  <TimeText>Seg-Sex</TimeText>
  </TimeView>

</ViewColumn>
</ClinicCards>

);
};

export default ClinicCard;
=======
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
>>>>>>> develop
