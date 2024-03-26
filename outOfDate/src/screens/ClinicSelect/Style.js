import styled from "styled-components";
import { LinkMedium } from "../../components/Link/Style";


export const CardContent = styled.TouchableOpacity`
    width: 95%;
    background-color: white;
    elevation: 5;
    border-radius: 5px;
    margin-bottom: 20px;
    flex-direction: row;
    height: 100px;
`

export const TextContainer = styled.View`
    width: 70%;
    margin-top: 0px;
    padding: 20px;
    gap: 10px;
    justify-content: center;
`

export const DayInfo = styled.TouchableOpacity`
    background-color: #E8FCFD;
    width: 50%;
    height: 30px;
    
    border-radius: 5px;
    flex-direction: row;
    margin-top: 10px;
    margin-right: 150px;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const TextClinic = styled.Text`
    font-family: Quicksand_600SemiBold;
    font-size: 14px;
    width: 70%;
`

export const OtherContent = styled.View`
    width: 60%;
    margin-bottom: 0px;
    justify-content: center;
    align-items: center;
`

export const AvaliationInfo = styled.View`
    width: 60%;
    margin-left: 0px;
    justify-content: center;
    padding-right: 80px;
    flex-direction: row;

`

export const StarText = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 14px;
    color: #F9A620;
    flex-direction: row;
    margin-left: 3px;
`

export const CancelLink = styled(LinkMedium)`
    font-family: 'Quicksand_600SemiBold';
    position: relative;
    left: 100px;
    margin-top: 30px;
    color: #344F8F; 
`
