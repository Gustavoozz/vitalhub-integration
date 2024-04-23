import styled from "styled-components";

export const CardContainer = styled.View`
    flex-shrink: 1;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
`

export const PatientContainer = styled.TouchableOpacity`
   width: 90%;
   background-color: white;
   elevation: 5;

   border-radius: 5px;
   flex-direction: row;
   align-items: center;
   
   padding: 10px; 
`

export const CardConsulta = styled.View`
    align-items: center;
`

export const PatientPhoto = styled.Image`
    width: 77px;
    height: 80px;
    border-radius: 5px;
`

export const TitleCard = styled.Text`
    width: 300px;
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
    color: #33303E;
    margin-top: 5px;
    gap: 5px;
`

export const InfoConsulta = styled.View`
    width: 40%;
    height: 94px;
    margin-left: 10px;
`

export const InfoPaciente = styled.View`
    width: 100%;
    flex-direction: row;
`

export const Age = styled.Text`
    font-family: 'Quicksand_400Regular';
    font-size: 14px;
    color: #8C8A97;
    margin-right: 10px;
`

export const Type = styled.Text`
    font-family: Quicksand_600SemiBold;
    font-size: 14px;
    color: #8C8A97;
`

export const HourButton = styled.TouchableOpacity`
    background-color: ${(props) => props.situacao == "Pendente" ? "#E8FCFD" : "#F1F0F5"};
    width: 70%;
    height: 30px;

    border-radius: 5px;
    flex-direction: row;
    margin-top: 7px;

    align-items: center;
    gap: 5px;
`

export const Hour = styled.Text`
    color: ${(props) => props.situacao == "Pendente" ? "#49B3BA" : "#4E4B59"};
    text-align: center;
    font-family: 'Quicksand_600SemiBold';
    padding-bottom: 3px;
`   

export const CancelButton = styled.TouchableOpacity`
    margin-top: 60px;
    margin-left: 20px;
`

export const CancelTitle = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    font-size: 12px;
    color: ${(props) => props.situacao == "Pendente" ? "#C81D25" : "#344F8F"};
    `