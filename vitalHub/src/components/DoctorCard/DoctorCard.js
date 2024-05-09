<<<<<<< HEAD
import { InformationContainer, MedicalCards, ProfileDataCard, ProfileName, SimpleText } from "./Style";
import { DoctorPicture } from "../Logo/Style";

const DoctorCard = ({ medico, setMedico }) => {

const [selected, setSelected ] = useState(true)

const handleCard = () => {
  setSelected(true);

}
  return (
    <InformationContainer>
        <MedicalCards 
        onPress={() => handleCard() && setMedico({doctorId: medico.Id})} 
        selected={selected}>
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
=======
import {
    DoctorContainer,
    DoctorContent,
    DoctorContentImage,
    DoctorText,
    DoctorTitle,
    DoctorTouchable
} from "./Style"

export const DoctorCard = ({
    onPress,
    doctorName,
    doctorRole,
    selected,
}) => {
    return (
        <DoctorContainer>
            <DoctorTouchable onPress={onPress}>
                <DoctorContentImage source={{ uri: "https://imgb.ifunny.co/images/bfc9bc11c482d1bc9f53bb14458fd0f848c34aed77d84390a234c890d70e7c7f_1.jpg" }} />

                <DoctorContent>
                    <DoctorTitle>{doctorName}</DoctorTitle>

                    <DoctorText>{doctorRole}</DoctorText>
                </DoctorContent>
            </DoctorTouchable>
        </DoctorContainer>
    )
}
>>>>>>> origin/develop
