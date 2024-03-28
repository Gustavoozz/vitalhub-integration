import { InformationContainer, MedicalCards, ProfileDataCard, ProfileName, SimpleText } from "./Style";
import { DoctorPicture } from "../Logo/Style";

const DoctorCard = ({selected = true, medico}) => {
  return (
    <InformationContainer>
        <MedicalCards selected={selected}>
      <DoctorPicture source={{ uri: 'https://miro.medium.com/v2/resize:fit:1200/1*U0SNnaTek7UmowyrDpjSaQ.jpeg'}} />

      <ProfileDataCard>
        <ProfileName>{medico.idNavigation.nome}</ProfileName>
        <SimpleText>{medico.especialidade.especialidade1}</SimpleText>
      </ProfileDataCard>
    </MedicalCards>
    </InformationContainer>
    
  );
};

export default DoctorCard;

// 
// {medico.especialidade.especialidade}