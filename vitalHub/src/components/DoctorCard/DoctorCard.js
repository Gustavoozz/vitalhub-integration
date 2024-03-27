import { InformationContainer, MedicalCards, ProfileDataCard, ProfileName, SimpleText } from "./Style";
import { DoctorPicture } from "../Logo/Style";

const DoctorCard = ({selected = true, medico}) => {
  return (
    <InformationContainer>
        <MedicalCards selected={selected}>
      <DoctorPicture source={require("../../assets/UserDoctor.png")} />

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