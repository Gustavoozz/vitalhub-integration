import styled from "styled-components";

export const Title = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 20px;
    color: #33303E;
    margin-bottom: 15px;
`

export const ButtonTitle = styled.Text`
    font-family: "MontserratAlternates_700Bold";
    color: white;
    font-size: 14px;
    text-transform: uppercase;
`

export const ButtonTitleGoogle = styled(ButtonTitle)`
    color: #496BBA;   
`

export const TitleUser = styled(Title)`
    font-size: 16px;
    margin-bottom: 10px;
`

export const LabelUser = styled(Title)`
    font-family: 'Quicksand_600SemiBold';
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 30px;
    width: 90%;
`

export const LabelProntuario = styled(LabelUser)`
    margin-top: 10px;
`
