import { Button } from "../../components/Button/Style"
import { Container, ContainerUser } from "../../components/Container/Style"
import { DoctorPicture } from "../../components/Logo/Style"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { CancelLink, CardContent, TextClinic } from "../ClinicSelect/Style"
import { DoctorCard, InformationContainer } from "./Style"

export const DoctorSelect = ({ navigation }) => {
   
    return(
        <ContainerUser contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
             <Title style={{ marginTop: 30, marginBottom: 50 }}>Selecionar médico</Title>

             <DoctorCard>
                <DoctorPicture
                source={{ uri: 'https://github.com/Gustavoozz.png' }}
                />
                <InformationContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Dr. Gustavo</Title>
                <TextClinic style={{ color: '#8C8A97'}}>Cirurgião, Cardiologista</TextClinic>  
                </InformationContainer>            
             </DoctorCard>

             <DoctorCard>
                <DoctorPicture
                source={{ uri: 'https://github.com/Gustavoozz.png' }}
                />
                <InformationContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Dr. Gustavo</Title>
                <TextClinic style={{ color: '#8C8A97'}}>Cirurgião, Cardiologista</TextClinic>  
                </InformationContainer>               
             </DoctorCard>

             <DoctorCard>
                <DoctorPicture
                source={{ uri: 'https://github.com/Gustavoozz.png' }}
                />
                <InformationContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Dr. Gustavo</Title>
                <TextClinic style={{ color: '#8C8A97'}}>Cirurgião, Cardiologista</TextClinic>  
                </InformationContainer>               
             </DoctorCard>

              
             <Button 
             onPress={() => navigation.replace("DateSelect")}
             style={{ marginTop: 40 }}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

          <CancelLink style={{ marginBottom: 0 }} onPress={() => navigation.replace("ClinicSelect")}>Cancelar</CancelLink>
        </ContainerUser>
    )  
}