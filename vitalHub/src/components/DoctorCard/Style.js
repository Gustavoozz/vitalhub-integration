import styled from 'styled-components/native';
import { Title } from '../Title/Style'

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
`;

export const ViewColumn = styled.View`
  flex-direction: column;
`
export const ProfileName = styled(Title)`
  align-self: flex-start;
  font-size: 16px;
  margin-top: 14px;
`
export const SimpleText = styled.Text`
  font-size: 16px;
  color: #8C8A97;
  font-family: 'Quicksand_600SemiBold';
`
export const ProfileDataCard= styled(ViewColumn)`
  gap: 0px;
  margin-left: 10px;
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
`