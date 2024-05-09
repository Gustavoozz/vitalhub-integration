import styled, { css } from 'styled-components/native'

export const ClinicCards = styled.View`
  width: 90%;
  height: 100px;
  padding: 18px;
  border-radius: 5px;
  margin-bottom: 12px;
  background-color: #FFFFFF;

  elevation: 5;

  align-self: center;
  flex-direction: row;
  justify-content: space-between;

 ${(props) => props.selected ? css`border: 2px solid #496BBA;` : ``};
`

export const ViewRow = styled.View`
  gap: 2px;
  align-items: center;
  flex-direction: row;
`

export const ViewColumn = styled.View`
  flex-direction: column;
  gap: 10px;
  
`

export const NameClinic = styled.Text`
  color: #33303E;
  font-size: 15px;
  font-family: 'MontserratAlternates_600SemiBold';
`

export const LocationClinic = styled.Text`
  font-size: 14px;
  color: #4E4B59;
  font-family: 'Quicksand_600SemiBold';
`

export const Rating = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: #F9A620;
`

export const TimeView = styled(ViewRow)`
  width: 110px;
  height: 30px;

  border-radius: 5px;
  background-color: #E8FCFD;

  justify-content: center;
  align-items: center;
  gap: 7px;

  margin-top: 30px;
  margin-left: 3px;
`

export const TimeText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #49B3BA;
  font-family: 'MontserratAlternates_500Medium'
`