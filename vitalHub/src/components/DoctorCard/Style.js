<<<<<<< HEAD
import styled from 'styled-components/native';
import { Title } from '../Title/Style'
import { css } from 'styled-components';

export const MedicalCards = styled.View`
  width: 95%;
  background-color: white;
  elevation: 5;
  flex-direction: row;

  border-radius: 5px;
  margin-bottom: 30px;
  gap: 30px;

  padding-left: 10px;
  height: 120px;
   ${(props) => props.selected ? css`border: 2px solid #496BBA;` : ``}
`;

export const ViewColumn = styled.View`
  flex-direction: column;
`
export const ProfileName = styled(Title)`
  align-self: flex-start;
  font-size: 16px;
  margin-top: 35px;
`
export const SimpleText = styled.Text`
  font-size: 14px;
  color: #8C8A97;
  font-family: 'Quicksand_600SemiBold';
`
export const ProfileDataCard= styled(ViewColumn)`
  gap: 0px;
  margin-left: 0px;
`
export const ProfileImage = styled.Image`
  width: 77px;
  height: 80px;
  border-radius: 5px;
`

export const InformationContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
=======
import styled from "styled-components"

export const DoctorContainer = styled.View`
    width: 90%;
    height: 102px;

    padding: 10px;
    justify-content: center;
    align-items: center;
    margin: 5px;

    background-color: #FFF;
    border-radius: 5px;
    elevation: 5;
`

export const DoctorTouchable = styled.TouchableOpacity`
    width: 100%;
    height: 100%;

    align-items: center;
    flex-direction: row;
    gap: 10px;
`

export const DoctorContent = styled.View`
    justify-content: center;

    gap: 10px;
`

export const DoctorContentImage = styled.Image`
    width: 77px;
    height: 80px;

    border-radius: 5px;
`

export const DoctorTitle = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
    color: #33303E;
`

export const DoctorText = styled.Text`
    font-family: "Quicksand_500Medium";
    font-size: 14px;
    color: #8C8A97;
>>>>>>> origin/develop
`